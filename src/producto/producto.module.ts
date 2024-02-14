import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { CategoriaService } from 'src/categoria/categoria.service';
import { CategoriaModule } from 'src/categoria/categoria.module';

@Module({
  imports: [TypeOrmModule.forFeature([Producto,Categoria]), CategoriaModule],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
