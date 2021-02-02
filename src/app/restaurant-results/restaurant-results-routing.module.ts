import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantResultsPage } from './restaurant-results.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantResultsPageRoutingModule {}
