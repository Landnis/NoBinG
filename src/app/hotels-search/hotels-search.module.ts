import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelsSearchPageRoutingModule } from './hotels-search-routing.module';

import { HotelsSearchPage } from './hotels-search.page';
import { CalendarModule } from 'ion2-calendar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule ,
    HotelsSearchPageRoutingModule
  ],
  declarations: [HotelsSearchPage]
})
export class HotelsSearchPageModule {}
