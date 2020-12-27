import { HomePage } from './../home/home.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumsPage } from './museums.page';
import { CarsPage } from '../cars/cars.page';
import { HotelsPage } from '../hotels/hotels.page';
import { ActivitiesPage } from '../activities/activities.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumsPage
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumsPageRoutingModule {}
