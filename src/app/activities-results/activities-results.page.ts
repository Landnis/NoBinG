import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
import { formatCurrency } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-activities-results',
  templateUrl: './activities-results.page.html',
  styleUrls: ['./activities-results.page.scss'],
})
export class ActivitiesResultsPage implements OnInit {
  datareceived:string="";
  Allactivities:any;
  data:any;
  users:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special){
        console.log("Params: ",params)
       this.data=JSON.parse(params.special)
      }
    })
  }
  async getActivities(){
    await this.api.getActivities()
    .subscribe(res=>{ 
      console.log(res);
        this.Allactivities=res
        console.log(this.Allactivities);
    
    },err=>{
      console.log(err);
    });
  }
  getID(){
    this.users=this.api.UserId
    console.log("user Id:"+this.users.id_users+"User name: "+this.users.firstname)
    //this.route.navigateByUrl('reserved-activity')
  }
 
  getValues(form){
    const date= moment(form.value.checkIn).format('DD-MM-YYYY')

    console.log("Ημερομηνία Κράτησης: "+date)
  }
  openDetailsWithQueryParams(data,form){
    
    console.log(data)
    
     let nav:NavigationExtras={
       queryParams:{
         special:JSON.stringify(data),
         special2:JSON.stringify(form.value)
       }
     }
     this.route.navigate(['reserved-activity'],nav)
   }

  
  ngOnInit() {
  }

}
