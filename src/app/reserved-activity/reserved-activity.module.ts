import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservedActivityPageRoutingModule } from './reserved-activity-routing.module';

import { ReservedActivityPage } from './reserved-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservedActivityPageRoutingModule
  ],
  declarations: [ReservedActivityPage]
})
export class ReservedActivityPageModule {}
