import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BudgetingModule } from './domains/budgeting/budgeting.module';
import { MediaModule } from './domains/media/media.module';
import { VehiclesModule } from './domains/vehicles/vehicles.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SharedModule,
    BudgetingModule,
    MediaModule,
    VehiclesModule,
  ],
})
export class AppModule {}
