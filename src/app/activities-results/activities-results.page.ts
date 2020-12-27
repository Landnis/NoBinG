import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-activities-results',
  templateUrl: './activities-results.page.html',
  styleUrls: ['./activities-results.page.scss'],
})
export class ActivitiesResultsPage implements OnInit {
  datareceived:string="";
  Allactivities:any;
  data:any;
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

  ngOnInit() {
  }

}
