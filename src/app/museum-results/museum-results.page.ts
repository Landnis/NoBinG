import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-museum-results',
  templateUrl: './museum-results.page.html',
  styleUrls: ['./museum-results.page.scss'],
})
export class MuseumResultsPage implements OnInit {
  datareceived:string="";
  AllMuseums:any;
  data:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
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

  ngOnInit() {
  }

}
