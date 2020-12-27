import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesResultsPage } from './activities-results.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesResultsPageRoutingModule {}
