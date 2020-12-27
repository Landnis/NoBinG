import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CarsPage } from '../cars/cars.page';
import { HotelsPage } from '../hotels/hotels.page';
import { ActivitiesPage } from '../activities/activities.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
