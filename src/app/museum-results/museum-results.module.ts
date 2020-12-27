import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseumResultsPageRoutingModule } from './museum-results-routing.module';

import { MuseumResultsPage } from './museum-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseumResultsPageRoutingModule
  ],
  declarations: [MuseumResultsPage]
})
export class MuseumResultsPageModule {}
