import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
import {CalendarModule} from 'ion2-calendar';
import { CalendarComponentOptions } from 'ion2-calendar'
import { AlertController,Platform  } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-museum-results',
  templateUrl: './museum-results.page.html',
  styleUrls: ['./museum-results.page.scss'],
})
export class MuseumResultsPage implements OnInit {
  datareceived:string="";
  AllMuseums:any;
  data:any;
 
  constructor(private platform:Platform,private loadingControl:LoadingController,private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special){
        console.log("Params: ",params)
       this.data=JSON.parse(params.special)
      }
    })
    
  
  }

  async getAllMuseums(){
    await this.api.getAllMuseums()
    .subscribe(res=>{ 
      console.log(res);
        this.AllMuseums=res
        console.log(this.AllMuseums);
    
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
     this.route.navigate(['museum-reserved'],nav)
   }

  getValues(form){
   const date= moment(form.value.reservDay).format('DD-MM-YYYY')
    console.log("Ημερομηνία Κράτησης: "+date)
    
  }
  ngOnInit() {
  }

 


}
