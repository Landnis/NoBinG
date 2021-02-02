import { CartService } from './../cart.service';
import { Router,NavigationExtras } from '@angular/router';
import { Platform, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
 OnlyCitiesOffice:any;
 AllCarOffice:any;
    constructor(private router:Router,private api:ApiService){
      this.getCitiesOfCarOffice();
      this.getAllCarRentalOffice();
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
async getCitiesOfCarOffice(){
  await this.api.getCitiesOfCarOffice()
  .subscribe(res=>{ 
    console.log(res);
      this.OnlyCitiesOffice=res
      console.log(this.OnlyCitiesOffice);
  
  },err=>{
    console.log(err);
  });
}

ngOnInit(){

}
async getValues(form):Promise<void>{
  console.log("Topothesia: "+form.value.Location) 
  this.router.navigateByUrl('/car-rent');
}
openDetailsWithQueryParams(user){
  console.log(user)
   let nav:NavigationExtras={
     queryParams:{
       special:JSON.stringify(user)
     }
   }
   this.router.navigate(['car-rent'],nav)
 }

}
