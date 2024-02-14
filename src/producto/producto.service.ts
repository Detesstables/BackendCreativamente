import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CategoriaService } from 'src/categoria/categoria.service';


@Injectable()
export class ProductoService {

  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
    private categoriaService: CategoriaService
  ){}

  /* METODO QUE CREA UN PRODUCTO ASOCIADA CON UNA CATEGORIA ID  */
  async crearProducto(producto: CreateProductoDto) {
    const categoriaEncontrada = await this.categoriaService.obtenerCategoria(producto.categoria_id);

    if (!categoriaEncontrada) return new HttpException ('Categoria no encontrada', HttpStatus.NOT_FOUND)
    
    const nuevoProducto =  this.productoRepository.create(producto)
    nuevoProducto.categoria = categoriaEncontrada;
    return this.productoRepository.save(nuevoProducto)
  }

  /* METODO QUE OBTIENE TODOS LOS PRODUCTOS */
  listarProductos() {
    return this.productoRepository.find()
  }


  /* METODO QUE OBTIENE SOLO UN PRODUCTO */
  obtenerProducto(id: number) {
    return this.productoRepository.findOne({
      where: {
        id_producto: id
      }
    });
  }

  actualizarProducto(id_producto: number, producto: UpdateProductoDto) {
    return this.productoRepository.update({id_producto}, producto);
  }

  remove(id: number) {
    return this.productoRepository.delete(id);
  }
}
