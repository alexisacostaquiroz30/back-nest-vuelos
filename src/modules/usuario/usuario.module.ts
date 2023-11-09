import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from '../../models/entities';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers:[UsuarioController],
    providers: [UsuarioService]
})
export class UsuarioModule {}
