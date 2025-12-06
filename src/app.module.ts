import { Module } from '@nestjs/common';
import { BudgetingModule } from './domains/budgeting/budgeting.module';
import { MediaModule } from './domains/media/media.module';
import { VehiclesModule } from './domains/vehicles/vehicles.module';

@Module({
  imports: [BudgetingModule, MediaModule, VehiclesModule],
})
export class AppModule {}
