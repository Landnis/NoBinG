import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-restaurant-results',
  templateUrl: './restaurant-results.page.html',
  styleUrls: ['./restaurant-results.page.scss'],
})
export class RestaurantResultsPage implements OnInit {
  datareceived:string="";
  AllRestaurants:any;
  data:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special){
        console.log("Params: ",params)
       this.data=JSON.parse(params.special)
      } 
    })
  }
  async getAllRestaurants(){
    await this.api.getAllRestaurants()
    .subscribe(res=>{ 
      console.log(res);
        this.AllRestaurants=res
        console.log(this.AllRestaurants);
    
    },err=>{
      console.log(err);
    });
  }

  openDetailsWithQueryParams(data,form){
    
    console.log(data)
    
     let nav:NavigationExtras={
       queryParams:{
         special:JSON.stringify(data),
         special2:JSON.stringify(form.value)
       }
     }
     this.route.navigate(['restaurant-reserved'],nav)
   }
  
  getValues(form){
    const date= moment(form.value.Whitch_Day).format('DD-MM-YYYY')
    console.log("Αριθμός Ατόμων: "+form.value.people+" Ημερομηνία: "+date)
    }

  ngOnInit() {
  }

}
