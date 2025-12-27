import { Module } from '@nestjs/common';

import { AssetsModule } from './infrastructure/assets/assets.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { LoggerModule } from './infrastructure/logger/logger.module';

@Module({
  imports: [AssetsModule, DatabaseModule, LoggerModule],
})
export class SharedModule {}
