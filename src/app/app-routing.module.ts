import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarServiceHistoryComponent } from './detailing-history/car-service-history/car-service-history.component';
import { ServiceHistoryFormComponent } from './detailing-history/service-history-form/service-history-form.component';

const routes: Routes = [
  { path: '', component: ServiceHistoryFormComponent },
  { path: 'service-histories/:id', component: CarServiceHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
