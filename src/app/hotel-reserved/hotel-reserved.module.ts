import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelReservedPageRoutingModule } from './hotel-reserved-routing.module';

import { HotelReservedPage } from './hotel-reserved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelReservedPageRoutingModule
  ],
  declarations: [HotelReservedPage]
})
export class HotelReservedPageModule {}
