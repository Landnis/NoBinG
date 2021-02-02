import { Component, OnInit, ViewChild } from'@angular/core';
import {ApiService}from '../api.service';
import { NavigationExtras, Router } from '@angular/router';
import {  NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.page.html',
  styleUrls: ['./museums.page.scss'],
})
export class MuseumsPage implements OnInit {
  Allmuseums:any;
  CitiesOfMuseums:any;
  
  constructor(public navCtrl: NavController,private api:ApiService,private router:Router){
    this.getAllMuseums();
    this.getCitiesOfMuseums();
 }
 async getAllMuseums(){
  await this.api.getAllMuseums()
  .subscribe(res=>{ 
    console.log(res);
      this.Allmuseums=res
      console.log(this.Allmuseums);
  
  },err=>{
    console.log(err);
  });
}
async getCitiesOfMuseums(){
  await this.api.getCitiesOfMuseums()
  .subscribe(res=>{ 
    console.log(res);
      this.CitiesOfMuseums=res
      console.log(this.CitiesOfMuseums);
  
  },err=>{
    console.log(err);
  });
}


  ngOnInit() {
  }
  async getValues(form):Promise<void>{
    console.log("Topothesia: "+form.value.MuseumLocation) 
    this.router.navigateByUrl('museum-results');
  }
  openDetailsWithQueryParams(user){
    console.log(user)
     let nav:NavigationExtras={
       queryParams:{
         special:JSON.stringify(user)
       }
     }
     this.router.navigate(['museum-results'],nav)
   }
}
