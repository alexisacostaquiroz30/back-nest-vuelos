import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


import { Aereopuerto } from 'src/models/entities/';
import { CreateAereopuertoDto } from './dto';

@Injectable()
export class AereopuertoService {

    constructor( @InjectRepository(Aereopuerto) private readonly aereopuertoRepository: Repository<Aereopuerto>){

    }

    async findAll(): Promise<Aereopuerto[]>{
        return await this.aereopuertoRepository.find();
    }
    
}
