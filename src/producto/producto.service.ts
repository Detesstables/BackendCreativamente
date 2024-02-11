import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductoService {

  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>
  ){}

  async crearProducto(nombre: string, precio: number, imagen: Buffer, stock: number, categoriaId: number): Promise<Producto> {
    const categoria = await this.categoriaRepository.findOne({ where: { id_categoria: categoriaId } });
    if (!categoria) {
    throw new Error('La categoría no existe');
    }

    const producto = new Producto();
    producto.nombre_producto = nombre;
    producto.precio = precio;   
    producto.imagen = imagen;
    producto.stock = stock;
    producto.categoria = categoria;

    return await this.productoRepository.save(producto);
}

  findAll() {
    return `This action returns all producto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
