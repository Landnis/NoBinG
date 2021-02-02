import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelReservedPage } from './hotel-reserved.page';

const routes: Routes = [
  {
    path: '',
    component: HotelReservedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelReservedPageRoutingModule {}
