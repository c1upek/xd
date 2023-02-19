import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHistoriesComponent } from './service-histories/service-histories.component';
import { ServiceHistoryItemComponent } from './service-history-item/service-history-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ServiceHistoriesComponent, ServiceHistoryItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
  ],
  exports: [ServiceHistoriesComponent],
})
export class DetailingHistoryModule {}
