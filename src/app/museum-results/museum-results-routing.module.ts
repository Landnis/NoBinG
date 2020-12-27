import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumResultsPage } from './museum-results.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumResultsPageRoutingModule {}
