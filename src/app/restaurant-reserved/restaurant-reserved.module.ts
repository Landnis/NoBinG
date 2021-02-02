import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantReservedPageRoutingModule } from './restaurant-reserved-routing.module';

import { RestaurantReservedPage } from './restaurant-reserved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantReservedPageRoutingModule
  ],
  declarations: [RestaurantReservedPage]
})
export class RestaurantReservedPageModule {}
