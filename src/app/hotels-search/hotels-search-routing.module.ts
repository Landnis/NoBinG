import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsSearchPage } from './hotels-search.page';

const routes: Routes = [
  {
    path: '',
    component: HotelsSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsSearchPageRoutingModule {}
