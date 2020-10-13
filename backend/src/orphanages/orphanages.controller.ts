import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import { CreateOrphanageDto } from './dto/create-orphanage.dto';
import { OrphanageService } from './orphanages.service';
import { Orphanage } from './orphanage.entity';
import { CreateOrphanageValidationPipe } from './pipes/create-orphanage-validation.pipe';
import { OrphanageView } from './views/orphanage.view';

@Controller('orphanages')
export class OrphanageController {
  constructor(
    private orphanageService: OrphanageService,
    private orphanageView: OrphanageView,
  ) {}
  @Post()
  @UseInterceptors(FilesInterceptor('images'))
  createOrphanage(
    @Body(CreateOrphanageValidationPipe, ValidationPipe)
    createOrphanageDto: CreateOrphanageDto,
    @UploadedFiles() images: Express.Multer.File[],
  ): Promise<Orphanage> {
    return this.orphanageService.createOrphanage(createOrphanageDto, images);
  }
  @Get()
  async getAllOrphanages(): Promise<any> {
    const orphanages = await this.orphanageService.getAllOrphanages();
    return this.orphanageView.renderMany(orphanages);
  }
  @Get('/:id')
  async getOrphanageById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    const orphanage = await this.orphanageService.getOrphanageById(id);
    return this.orphanageView.render(orphanage);
  }
}
