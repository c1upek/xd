import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailingHistoryModule } from './detailing-history/detailing-history.module';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GraphQLModule, HttpClientModule, DetailingHistoryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}