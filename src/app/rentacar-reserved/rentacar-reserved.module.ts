import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentacarReservedPageRoutingModule } from './rentacar-reserved-routing.module';

import { RentacarReservedPage } from './rentacar-reserved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentacarReservedPageRoutingModule
  ],
  declarations: [RentacarReservedPage]
})
export class RentacarReservedPageModule {}
