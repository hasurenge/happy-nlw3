import { Repository, EntityRepository } from 'typeorm';
import { Logger, InternalServerErrorException } from '@nestjs/common';

import { Orphanage } from './orphanage.entity';
import { CreateOrphanageDto } from './dto/create-orphanage.dto';
import { Image } from './image.entity';

@EntityRepository(Orphanage)
export class OrphanageRepository extends Repository<Orphanage> {
  private logger = new Logger('OrphanageRepository');
  async createOrphanage(
    createOrphanageDto: CreateOrphanageDto,
    images: Express.Multer.File[],
  ): Promise<Orphanage> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_at_weekends,
    } = createOrphanageDto;
    const orphanage = new Orphanage();
    orphanage.name = name;
    orphanage.latitude = latitude;
    orphanage.longitude = longitude;
    orphanage.about = about;
    orphanage.instructions = instructions;
    orphanage.opening_hours = opening_hours;
    orphanage.open_at_weekends = open_at_weekends;
    orphanage.images = images.map(image => ({ path: image.filename } as Image));
    try {
      await orphanage.save();
      this.logger.debug(`Entity saved.`);
      return orphanage;
    } catch (error) {
      this.logger.error(`Couldn't save entity.`, error.stack);
      throw new InternalServerErrorException();
    }
  }
}
