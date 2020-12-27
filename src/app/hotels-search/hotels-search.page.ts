import { HotelsPage } from './../hotels/hotels.page';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import {CalendarModule} from 'ion2-calendar';
import { CalendarComponentOptions } from 'ion2-calendar'
@Component({
  selector: 'app-hotels-search',
  templateUrl: './hotels-search.page.html',
  styleUrls: ['./hotels-search.page.scss'],
})
export class HotelsSearchPage implements OnInit {
  dateRange: { from: string; to: string; };
  type: 'string';
 
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  constructor() { }
  ngOnInit() {
  }
 
}
