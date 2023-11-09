import { Column, Entity, Index, JoinColumn, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";
import { Vuelo } from "./Vuelo";

@Index("reserva_pkey", ["idReserva"], { unique: true })
@Entity("reserva", { schema: "public" })
export class Reserva {
    @PrimaryGeneratedColumn('increment')
    idReserva: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.idUsuario)
    @JoinColumn([{ name: "id_cliente", referencedColumnName: "idUsuario" }])
    idCliente2: Usuario;

    @ManyToOne(() => Vuelo, (vuelo) => vuelo.idAvion)
    @JoinColumn([{ name: "id_vuelo", referencedColumnName: "idVuelo" }])
    idVuelo2: Vuelo;

    @Column("integer", { name: "numero_fila" })
    numeroFila: number;

    @Column("integer", { name: "numero_asiento" })
    numeroAsiento: number;

    
}
