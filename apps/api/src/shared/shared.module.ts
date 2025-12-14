import { Module } from '@nestjs/common';

import { DatabaseModule } from './infrastructure/database/database.module';
import { LoggerModule } from './infrastructure/logger/logger.module';

@Module({
  imports: [DatabaseModule, LoggerModule],
})
export class SharedModule {}
