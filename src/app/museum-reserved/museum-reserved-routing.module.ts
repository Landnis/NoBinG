import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumReservedPage } from './museum-reserved.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumReservedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumReservedPageRoutingModule {}
