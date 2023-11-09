import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Avion } from "./Avion";

@Index("aereolinea_pkey", ["idAereolinea"], { unique: true })
@Entity("aereolinea", { schema: "public" })
export class Aereolinea {
  @PrimaryGeneratedColumn('increment')
  idAereolinea: number;

  @Column("character varying", { name: "nombre_aereolinea" })
  nombreAereolinea: string;

  @OneToMany(() => Avion, (avion) => avion.idAereolinea2)
  avions: Avion[];
}
