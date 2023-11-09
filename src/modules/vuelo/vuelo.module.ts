import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VueloService } from './vuelo.service';
import { VueloController } from './vuelo.controller';
import { Avion, Vuelo } from '../../models/entities';

@Module({
    imports: [TypeOrmModule.forFeature([Vuelo,Avion])],
    controllers:[VueloController],
    providers: [VueloService]
})
export class VueloModule {}
