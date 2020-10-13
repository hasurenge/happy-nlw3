import {
  Injectable,
  Logger,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Orphanage } from './orphanage.entity';
import { OrphanageRepository } from './orphanage.repository';
import { CreateOrphanageDto } from './dto/create-orphanage.dto';

@Injectable()
export class OrphanageService {
  private logger = new Logger('OrphanageService');
  constructor(
    @InjectRepository(OrphanageRepository)
    private orphanageRepository: OrphanageRepository,
  ) {}
  createOrphanage(
    createOrphanageDto: CreateOrphanageDto,
    images: Express.Multer.File[],
  ): Promise<Orphanage> {
    return this.orphanageRepository.createOrphanage(createOrphanageDto, images);
  }
  async getAllOrphanages(): Promise<Orphanage[]> {
    try {
      const orphanages = await this.orphanageRepository.find({
        relations: ['images'],
      });
      this.logger.debug(`Retrieved all items.`);
      return orphanages;
    } catch (error) {
      this.logger.error(`Couldn't find all items.`, error.stack);
      throw new InternalServerErrorException();
    }
  }
  async getOrphanageById(id: number): Promise<Orphanage> {
    try {
      const orphanage = await this.orphanageRepository.findOneOrFail(id, {
        relations: ['images'],
      });
      this.logger.debug(`Retrieved item of ID #${id}.`);
      return orphanage;
    } catch (error) {
      if (error.name === 'EntityNotFound') {
        this.logger.warn(`Couldn't find item with ID ${id}.`);
        throw new NotFoundException(`No item with ID ${id} could be found.`);
      } else {
        this.logger.error(`Couldn't find item with ID ${id}.`, error.stack);
        throw new InternalServerErrorException();
      }
    }
  }
}
