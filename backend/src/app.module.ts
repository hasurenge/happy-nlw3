import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfig } from './config/typeorm.config';
import { OrphanagesModule } from './orphanages/orphanages.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), OrphanagesModule],
})
export class AppModule {}
