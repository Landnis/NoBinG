import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-car-rent',
  templateUrl: './car-rent.page.html',
  styleUrls: ['./car-rent.page.scss'],
})
export class CarRentPage implements OnInit {
  datareceived:string="";
  AllCarOffice:any;
  CarCategories:any;
  data:any;
  AllVehicle:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special){
        console.log("Params: ",params)
       this.data=JSON.parse(params.special)
      }
    })
    this.getAllVehicles();
    this.getCarCategories();
  }

  ngOnInit() {
  }
  async getAllCarRentalOffice(){
    await this.api.getAllCarRentalOffice()
      .subscribe(res=>{ 
        console.log(res);
        this.AllCarOffice=res
        console.log(this.AllCarOffice);
  },err=>{
    console.log(err);
   });
  }

  async getAllVehicles(){
    await this.api.getAllVehicles()
      .subscribe(res=>{ 
        console.log(res);
        this.AllVehicle=res
        console.log(this.AllVehicle);
  },err=>{
    console.log(err);
   });
  }

  async getCarCategories(){
    await this.api.getCarCategories()
      .subscribe(res=>{ 
        console.log(res);
        this.CarCategories=res
        console.log(this.CarCategories);
  },err=>{
    console.log(err);
   });
  }
 
  openDetailsWithQueryParams(data,form,user){
    console.log(data)
    console.log(form.value)
    console.log(user)
    let nav:NavigationExtras={
      queryParams:{
        special:JSON.stringify(data),
        special2:JSON.stringify(form.value),
        special3:JSON.stringify(user)
      }
    }
    this.route.navigate(['rentacar-reserved'],nav)
  }

  
}
