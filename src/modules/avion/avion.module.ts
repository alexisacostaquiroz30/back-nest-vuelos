import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvionService } from './avion.service';
import { AvionController } from './avion.controller';
import { Avion } from '../../models/entities';

@Module({
    imports: [TypeOrmModule.forFeature([Avion])],
    controllers:[AvionController],
    providers: [AvionService]
})
export class AvionModule {}
