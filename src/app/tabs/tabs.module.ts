import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivitiesPageModule } from './../activities/activities.module';
import { CarsPageModule } from './../cars/cars.module';
import { HotelsPageModule } from './../hotels/hotels.module';
import { HomePageModule } from './../home/home.module';
import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,HomePageModule ,HotelsPageModule,CarsPageModule ,ActivitiesPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
