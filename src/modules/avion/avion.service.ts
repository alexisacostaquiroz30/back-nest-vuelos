import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


import { Avion } from 'src/models/entities/';
import { CreateAvionDto } from './dto';

@Injectable()
export class AvionService {

    constructor( @InjectRepository(Avion) private readonly AvionRepository: Repository<Avion>){

    }

    async getUsuarios(): Promise<Avion[]>{
        return await this.AvionRepository.find();
    }

    
}
