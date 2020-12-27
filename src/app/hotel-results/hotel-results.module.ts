import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelResultsPageRoutingModule } from './hotel-results-routing.module';

import { HotelResultsPage } from './hotel-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelResultsPageRoutingModule
  ],
  declarations: [HotelResultsPage]
})
export class HotelResultsPageModule {}
