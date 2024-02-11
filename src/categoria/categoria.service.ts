import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {

  constructor(@InjectRepository(Categoria) private categoriaRepostitory: Repository<Categoria>){}

  /* METODO QUE CREA LA CATEGORIA POST */
  crearCategoria(categoria: CreateCategoriaDto) {
    const nuevaCategoria = this.categoriaRepostitory.create(categoria)
    return this.categoriaRepostitory.save(nuevaCategoria);
  }

  /* METODO QUE ALISTA TODAS LAS CATEGORIAS GET */
  listarCategoria() {
    return this.categoriaRepostitory.find();
  }

  /* METODO QUE OBTIENE SOLO UNA CATEGORIA */
  obtenerCategoria(id_categoria: number) {
    return this.categoriaRepostitory.findOne({
      where: {
        id_categoria
      }
    });
  }

  /* ACTUALIZAR CATEGORIA PD:ESTA WEA NI SE COMO ME SALIO LA SAQUE EL OJO NOMAS XDDD */
  actualizarCategoria(id_categoria: number, categoria: UpdateCategoriaDto) {
    return this.categoriaRepostitory.update({id_categoria},categoria);
  }

  eliminarCategoria(id: number) {
    return this.categoriaRepostitory.delete(id);
  }
}
