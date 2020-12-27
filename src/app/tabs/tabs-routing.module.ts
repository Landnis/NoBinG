import { HomePage } from './../home/home.page';
import { HomePageModule} from './../home/home.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CarsPage } from '../cars/cars.page';
import { HotelsPage } from '../hotels/hotels.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path:'home',
        outlet:'home',
        component:HomePage
      },
      {
        path:'cars',
        outlet:'cars',
        component:CarsPage
      },
      {
        path:'hotels',
        outlet:'hotels',
        component:HotelsPage
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
