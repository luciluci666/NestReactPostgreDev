import { Module } from '@nestjs/common';
import { AppController } from './modules/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import DataSource from './database/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(DataSource.options)],
  controllers: [AppController],
})
export class AppModule {}
