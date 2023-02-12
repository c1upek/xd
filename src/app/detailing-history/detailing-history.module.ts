import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHistoriesComponent } from './service-histories/service-histories.component';
import { ServiceHistoryItemComponent } from './service-history-item/service-history-item.component';

@NgModule({
  declarations: [ServiceHistoriesComponent, ServiceHistoryItemComponent],
  imports: [CommonModule],
  exports: [ServiceHistoriesComponent],
})
export class DetailingHistoryModule {}
