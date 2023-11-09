import { Controller, Body, Delete,Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto';
import { Usuario } from 'src/models/entities/Usuario';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller('usuario')
@ApiTags('usuario')
export class UsuarioController {
    constructor(private readonly UsuarioService: UsuarioService ){

    }

    @Get()
    @ApiOperation({ summary: 'consulta todos los clientes registrados' })
    @ApiResponse({ status: 200, description: 'retorna todos los aereopuertos los clientes registrados' })
    async findAll() {
        return this.UsuarioService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'registra un nuevo cliente' })
    @ApiResponse({ status: 200, description: 'retorna registro del nuevo cliente' })
    crearUsuario(@Body() createUsuario: CreateUsuarioDto): Promise<Usuario>{
        return this.UsuarioService.nuevousuario(createUsuario);
    }

}
