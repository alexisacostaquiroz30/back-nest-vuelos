import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vuelo } from "./Vuelo";


@Entity("aereopuerto", { schema: "public" })
export class Aereopuerto {
  @PrimaryGeneratedColumn('increment')
  idAereopuerto: number;

  @Column("character varying", { name: "nombre_aereopuerto" })
  nombreAereopuerto: string;

  @OneToMany(() => Vuelo, (vuelo) => vuelo.idDestino)
  vuelos: Vuelo[];

  @OneToMany(() => Vuelo, (vuelo) => vuelo.idOrigen)
  vuelos2: Vuelo[];
}
