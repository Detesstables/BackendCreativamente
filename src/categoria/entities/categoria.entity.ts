import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from 'src/producto/entities/producto.entity';

@Entity()
export class Categoria {
@PrimaryGeneratedColumn()
id_categoria: number;

@Column()
nombre_categoria: string;

@OneToMany(() => Producto, producto => producto.categoria)
productos: Producto[];
}