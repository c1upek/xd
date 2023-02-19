import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHistoriesComponent } from './service-histories/service-histories.component';
import { ServiceHistoryItemComponent } from './service-history-item/service-history-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { ServiceHistoryFormComponent } from './service-history-form/service-history-form.component';
import { DetailingHistoryComponent } from './detailing-history.component';
import { RouterModule, Routes } from '@angular/router';
import { CarServiceHistoryComponent } from './car-service-history/car-service-history.component';

const routes: Routes = [
  { path: 'service-histories/:id', component: CarServiceHistoryComponent },
];

@NgModule({
  declarations: [
    ServiceHistoriesComponent,
    ServiceHistoryItemComponent,
    ServiceHistoryFormComponent,
    DetailingHistoryComponent,
    CarServiceHistoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
  ],
  exports: [RouterModule, ServiceHistoryFormComponent, CarServiceHistoryComponent],
})
export class DetailingHistoryModule {}
