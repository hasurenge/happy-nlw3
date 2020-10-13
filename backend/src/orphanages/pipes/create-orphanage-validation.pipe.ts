import { PipeTransform, BadRequestException } from '@nestjs/common';

import { CreateOrphanageDto } from '../dto/create-orphanage.dto';

export class CreateOrphanageValidationPipe implements PipeTransform {
  transform(createOrphanageDto: CreateOrphanageDto) {
    const { open_at_weekends } = createOrphanageDto;

    if (
      typeof open_at_weekends !== 'boolean' &&
      ['true', 'false'].includes(open_at_weekends)
    ) {
      createOrphanageDto.open_at_weekends = Boolean(open_at_weekends);
      return createOrphanageDto;
    } else
      throw new BadRequestException(`open_at_weekends must be a boolean value`);
  }
}
