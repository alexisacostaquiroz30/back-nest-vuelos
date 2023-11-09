import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reserva } from "./Reserva";

@Index("usuario_pkey", ["idUsuario"], { unique: true })
@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  idUsuario: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("character varying", { name: "apellidos", length: 100 })
  apellidos: string;

  @Column("character varying", { name: "telefono", length: 10 })
  telefono: string;

  @OneToMany(() => Reserva, (reserva) => reserva.idCliente2)
  reservas: Reserva[];
}
