import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseumReservedPageRoutingModule } from './museum-reserved-routing.module';

import { MuseumReservedPage } from './museum-reserved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseumReservedPageRoutingModule
  ],
  declarations: [MuseumReservedPage]
})
export class MuseumReservedPageModule {}
