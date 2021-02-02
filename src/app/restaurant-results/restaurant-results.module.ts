import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantResultsPageRoutingModule } from './restaurant-results-routing.module';

import { RestaurantResultsPage } from './restaurant-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantResultsPageRoutingModule
  ],
  declarations: [RestaurantResultsPage]
})
export class RestaurantResultsPageModule {}
