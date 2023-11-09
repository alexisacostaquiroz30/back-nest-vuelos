import { Controller, Body, Delete,Get, Post, Param } from '@nestjs/common';
import { VueloService } from './vuelo.service';
import { CreateVueloDto } from './dto';
import { Vuelo } from 'src/models/entities/';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('Vuelo')
@ApiTags('Vuelo')
export class VueloController {
    constructor(private readonly VueloService: VueloService ){

    }

    @Get()
    @ApiOperation({ summary: 'consulta todos los vuelos registrados' })
    @ApiResponse({ status: 200, description: 'retorna todos los aereopuertos los vuelos registrados' })
    async findAll() {
        return this.VueloService.findAll();
    }

    @Get(':idVuelo')
    @ApiOperation({ summary: 'consulta un vuelo en especifico' })
    @ApiResponse({ status: 200, description: 'retorna la informacion de un vuelo en especifico' })
    async findOne(@Param('idVuelo') idVuelo: number) {
        return this.VueloService.findOne(idVuelo);
    }

    @Post()
    @ApiOperation({ summary: 'registra un nuevo vuelo' })
    @ApiResponse({ status: 200, description: 'retorna registro del nuevo vuelo' })
    crearVuelo(@Body() createVuelo: CreateVueloDto): Promise<Vuelo>{
        return this.VueloService.nuevoVuelo(createVuelo);
    }

}
