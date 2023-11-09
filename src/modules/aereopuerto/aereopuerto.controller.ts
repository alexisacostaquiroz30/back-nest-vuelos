import { Controller, Body, Delete,Get, Post } from '@nestjs/common';
import { AereopuertoService } from './aereopuerto.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('aereopuerto')
@ApiTags('aereopuerto')
export class AereopuertoController {
    constructor(private readonly AereopuertoService: AereopuertoService ){

    }

    @Get()
    @ApiOperation({ summary: 'consulta todos los aereopuertos' })
    @ApiResponse({ status: 200, description: 'retorna todos los aereopuertos' })
    async findAll() {
        return this.AereopuertoService.findAll();
    }

}
