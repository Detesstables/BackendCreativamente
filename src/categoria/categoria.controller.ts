import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  crearCategoria(@Body() nuevaCategoria: CreateCategoriaDto) {
    return this.categoriaService.crearCategoria(nuevaCategoria);
  }

  @Get()
  listarCategoria() {
    return this.categoriaService.listarCategoria();
  }

  @Get(':id')
  async obtenerCategoria(@Param('id') id: number) {
      return this.categoriaService.obtenerCategoria(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() Categoria: UpdateCategoriaDto) {
    return this.categoriaService.actualizarCategoria(+id, Categoria);
  }

  @Delete(':id')
  eliminarCategoria(@Param('id') id: string) {
    return this.categoriaService.eliminarCategoria(+id);
  }
}
