import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


import { Aereolinea } from 'src/models/entities/';
import { CreateAereolineaDto } from './dto';

@Injectable()
export class AereolineaService {

    constructor( @InjectRepository(Aereolinea) private readonly AereolineaRepository: Repository<Aereolinea>){

    }

    async findAll(): Promise<Aereolinea[]>{
        return await this.AereolineaRepository.find();
    }
    
}
