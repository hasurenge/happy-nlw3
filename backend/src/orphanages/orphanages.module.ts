import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';

import { OrphanageRepository } from './orphanage.repository';
import { OrphanageController } from './orphanages.controller';
import { OrphanageService } from './orphanages.service';
import { ImageView } from './views/image.view';
import { OrphanageView } from './views/orphanage.view';

@Module({
  controllers: [OrphanageController],
  providers: [OrphanageService, ImageView, OrphanageView],
  imports: [
    TypeOrmModule.forFeature([OrphanageRepository]),
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, callback) =>
          callback(null, `${Date.now()}-${file.originalname}`),
      }),
    }),
  ],
})
export class OrphanagesModule {}
