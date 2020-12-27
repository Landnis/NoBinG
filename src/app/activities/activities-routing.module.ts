import { HotelsPage } from './../hotels/hotels.page';
import { CarsPage } from './../cars/cars.page';
import { HomePage } from './../home/home.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesPage } from './activities.page';
const routes: Routes = [
  {
    path: '',
    component: ActivitiesPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesPageRoutingModule {}
