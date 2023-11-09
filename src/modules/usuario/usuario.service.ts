import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


import { Usuario } from 'src/models/entities/Usuario';
import { CreateUsuarioDto } from './dto';

@Injectable()
export class UsuarioService {

    constructor( @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>){

    }

    async findAll(): Promise<Usuario[]>{
        return await this.usuarioRepository.find();
    }
    
    async nuevousuario({nombre,apellidos,telefono}: CreateUsuarioDto){
        const usuario = this.usuarioRepository.create({nombre,apellidos,telefono})
        return this.usuarioRepository.save(usuario)
    }
    
}
