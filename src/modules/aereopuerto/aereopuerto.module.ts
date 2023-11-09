import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AereopuertoService } from './aereopuerto.service';
import { AereopuertoController } from './aereopuerto.controller';
import { Aereopuerto } from '../../models/entities';

@Module({
    imports: [TypeOrmModule.forFeature([Aereopuerto])],
    controllers:[AereopuertoController],
    providers: [AereopuertoService]
})
export class AereopuertoModule {}
