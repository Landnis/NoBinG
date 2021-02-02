import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentacarReservedPage } from './rentacar-reserved.page';

const routes: Routes = [
  {
    path: '',
    component: RentacarReservedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentacarReservedPageRoutingModule {}
