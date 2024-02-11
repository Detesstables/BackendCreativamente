export class CreateProductoDto {
    nombre_producto: string;
    precio: number;
    imagen: Buffer;
    stock: number;
    categoria_id: number;
}
