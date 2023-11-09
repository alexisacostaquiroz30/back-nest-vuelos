import { Aereopuerto, Avion } from "src/models/entities";
import { Timestamp } from "typeorm";

export class CreateVueloDto {
    numeroVuelo: string;
    idAvion: Avion;
    idOrigen: Aereopuerto;
    idDestino: Aereopuerto;
    fechaSalida: Date;
    fechaLlegada: Date;
    fechaCreacion: Date;
}
