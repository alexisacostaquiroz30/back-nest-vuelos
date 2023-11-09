import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Aereolinea } from "./Aereolinea";
import { Vuelo } from "./Vuelo";

@Index("avion_pkey", ["idAvion"], { unique: true })
@Entity("avion", { schema: "public" })

export class Avion {
    @PrimaryGeneratedColumn('increment')
    idAvion: number;

    @Column("character varying", { name: "serial_avion", length: 10 })
    serialAvion: string;

    @Column("integer", { name: "numero_asientos" })
    numeroAsientos: number;

    @Column("integer", { name: "id_aereolinea" })
    idAereolinea: number;

    @Column("integer", { name: "numero_filas", nullable: true })
    numeroFilas: number | null;

    @ManyToOne(() => Aereolinea, (aereolinea) => aereolinea.idAereolinea)
    @JoinColumn([{ name: "id_aereolinea", referencedColumnName: "idAereolinea" }])
    idAereolinea2: Aereolinea;

    @OneToMany(() => Vuelo, (vuelo) => vuelo.idAvion)
    vuelos: Vuelo[];
}
