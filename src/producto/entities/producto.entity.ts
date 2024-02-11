import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Entity()
export class Producto {
@PrimaryGeneratedColumn()
id_producto: number;

@Column()
nombre_producto: string;

@Column()
precio: number;

@Column({ nullable: true, type: 'longblob' }) // Haciendo la columna imagen opcional
imagen: Buffer;

@Column()
stock: number;

@ManyToOne(() => Categoria, categoria => categoria.productos)
categoria: Categoria;
}
