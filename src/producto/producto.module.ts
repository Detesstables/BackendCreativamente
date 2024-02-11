import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { CategoriaService } from 'src/categoria/categoria.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producto,Categoria, CategoriaService])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
