import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitiesResultsPageRoutingModule } from './activities-results-routing.module';

import { ActivitiesResultsPage } from './activities-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitiesResultsPageRoutingModule
  ],
  declarations: [ActivitiesResultsPage]
})
export class ActivitiesResultsPageModule {}
