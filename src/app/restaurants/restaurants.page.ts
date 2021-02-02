import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import{ApiService} from '../api.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
AllRestaurants:any;
CitiesOfRestaurants:any;
  constructor(private router:Router,private api:ApiService) {
    this.getAllRestaurants();
    this.getCitiesOfRestaurants();
   }
 
  ngOnInit() {
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
  

  async getCitiesOfRestaurants(){
    await this.api.getCitiesOfRestaurants()
    .subscribe(res=>{ 
      console.log(res);
        this.CitiesOfRestaurants=res
        console.log(this.CitiesOfRestaurants);
    
    },err=>{
      console.log(err);
    });
  }
  openDetailsWithQueryParams(user){
    console.log(user)
     let nav:NavigationExtras={
       queryParams:{
         special:JSON.stringify(user)
       }
     }
     this.router.navigate(['restaurant-results'],nav)
   }
   
  async getValues(form):Promise<void>{
    console.log("Topothesia: "+form.value.Location) 
    this.router.navigateByUrl('/restaurant-results');
  }
}
