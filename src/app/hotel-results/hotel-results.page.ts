import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-hotel-results',
  templateUrl: './hotel-results.page.html',
  styleUrls: ['./hotel-results.page.scss'],
})
export class HotelResultsPage implements OnInit {
  datareceived:string="";
  AllHotels:any;
  data:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special){
        console.log("Params: ",params)
       this.data=JSON.parse(params.special)
      }
    })
  }
  async   getAllHotels(){
    await this.api.getAllHotels()
    .subscribe(res=>{ 
      console.log(res);
        this.AllHotels=res
        console.log(this.AllHotels);
    
    },err=>{
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
