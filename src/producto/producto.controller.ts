import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Controller('producto')
export class ProductoController {
  constructor(private productoService: ProductoService) {}

  @Post()
  crearProducto(@Body()producto:CreateProductoDto) {
    return this.productoService.crearProducto(producto)
  }

  @Get()
  listarProductos() {
    return this.productoService.listarProductos()
  }

  /* GET /producto/:id */
  @Get(':id')
  obtenerProducto(@Param('id') id: number): Promise<Producto> {
    return this.productoService.obtenerProducto(id);
  }

  @Patch(':id')
  actualizarProducto(@Param('id') id: number, @Body() producto: UpdateProductoDto) {
    return this.productoService.actualizarProducto(id, producto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productoService.remove(id);
  }
}
