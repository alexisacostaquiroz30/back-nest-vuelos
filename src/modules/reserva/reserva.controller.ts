import { Controller, Body, Delete,Get, Post, Param } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dto';
import { Reserva } from 'src/models/entities/';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('Reserva')
@ApiTags('Reserva')
export class ReservaController {
    constructor(private readonly ReservaService: ReservaService ){

    }

    @Get()
    @ApiOperation({ summary: 'consulta todas las reservas registradas' })
    @ApiResponse({ status: 200, description: 'retorna todas las reservas registradas' })
    async findAll() {
        return this.ReservaService.findAll();
    }

    @Get(':idVuelo')
    @ApiOperation({ summary: 'consulta todas las reservas registradas por vuelo' })
    @ApiResponse({ status: 200, description: 'retorna todas las reservas registradas por vuelo' })
    async findOne(@Param('idVuelo') idVuelo: number) {
        return this.ReservaService.findOne(idVuelo);
    }

    @Get('/reserva/:idCliente')
    @ApiOperation({ summary: 'consulta todas las reservas registradas a un cliente' })
    @ApiResponse({ status: 200, description: 'retorna todas las reservas registradas a un cliente' })
    async findOneCliente(@Param('idCliente') idCliente: number) {
        return this.ReservaService.findOneCliente(idCliente);
    }

    @Post()
    @ApiOperation({ summary: 'registra una nueva reserva' })
    @ApiResponse({ status: 200, description: 'registro de la nueva reserva' })
    crearReserva(@Body() createReserve: CreateReservaDto): Promise<Reserva>{
        return this.ReservaService.crearReserva(createReserve);
    }

}
