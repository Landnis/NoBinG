import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelResultsPage } from './hotel-results.page';

const routes: Routes = [
  {
    path: '',
    component: HotelResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelResultsPageRoutingModule {}
