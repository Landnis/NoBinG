import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartPanelPageRoutingModule } from './start-panel-routing.module';

import { StartPanelPage } from './start-panel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartPanelPageRoutingModule
  ],
  declarations: [StartPanelPage]
})
export class StartPanelPageModule {}
