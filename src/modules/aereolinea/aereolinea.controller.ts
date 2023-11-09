import { Controller, Body, Delete,Get, Post } from '@nestjs/common';
import { AereolineaService } from './aereolinea.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('Aereolinea')
@ApiTags('Aereolinea')
export class AereolineaController {
    constructor(private readonly AereolineaService: AereolineaService ){

    }

    @Get()
    @ApiOperation({ summary: 'consulta todas las aereolineas' })
    @ApiResponse({ status: 200, description: 'retorna todas las aereolineas.' })
    async findAll() {
        return this.AereolineaService.findAll();
    }

}
