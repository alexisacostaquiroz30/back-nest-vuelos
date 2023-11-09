import { Usuario, Vuelo } from "src/models/entities";

export class CreateReservaDto {
    idCliente2: Usuario;
    idVuelo2: Vuelo;
    numeroFila: number;
    numeroAsiento: number;
}
