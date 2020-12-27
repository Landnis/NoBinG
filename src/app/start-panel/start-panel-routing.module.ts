import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPanelPage } from './start-panel.page';

const routes: Routes = [
  {
    path: '',
    component: StartPanelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPanelPageRoutingModule {}
