import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Reserva } from "./Reserva";
import { Avion } from "./Avion";
import { Aereopuerto } from "./Aereopuerto";

@Index("vuelo_pkey", ["idVuelo"], { unique: true })
@Entity("vuelo", { schema: "public" })
export class Vuelo {
    @PrimaryGeneratedColumn('increment')
    idVuelo: number;

    @Column("character varying", { name: "numero_vuelo", length: 50 })
    numeroVuelo: string;

    @ManyToOne(() => Avion, (avion) => avion.idAvion)
    @JoinColumn([{ name: "id_avion"}])
    idAvion: Avion;

    @ManyToOne(() => Aereopuerto, (aereopuerto) => aereopuerto.vuelos2)
    @JoinColumn([{ name: "id_origen", referencedColumnName: "idAereopuerto" }])
    idOrigen: Aereopuerto;

    @ManyToOne(() => Aereopuerto, (aereopuerto) => aereopuerto.vuelos)
    @JoinColumn([{ name: "id_destino", referencedColumnName: "idAereopuerto" }])
    idDestino: Aereopuerto;

    @Column("timestamp", { name: "fecha_salida" })
    fechaSalida: Date;

    @Column("timestamp", { name: "fecha_llegada" })
    fechaLlegada: Date;

    @Column("timestamp", { name: "fecha_creacion", nullable: true })
    fechaCreacion: Date;

    @OneToMany(() => Reserva, (reserva) => reserva.idVuelo2)
    reservas: Reserva[];

    
}
