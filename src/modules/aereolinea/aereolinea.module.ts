import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AereolineaService } from './aereolinea.service';
import { AereolineaController } from './aereolinea.controller';
import { Aereolinea } from '../../models/entities';

@Module({
    imports: [TypeOrmModule.forFeature([Aereolinea])],
    controllers:[AereolineaController],
    providers: [AereolineaService]
})
export class AereolineaModule {}
