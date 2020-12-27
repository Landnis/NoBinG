import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import{ApiService} from '../api.service';
import {CitiesImagesService} from '../cities-images.service';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {
 
  OnlyCitiesHotels:any;
  AllHotels:any;
  image:any;
   constructor(private api:ApiService,private router:Router,private img:CitiesImagesService){
      this. getHotelsCity();
      this. getAllHotels();
      
   }
   async  getHotelsCity(){
     await this.api.getHotelsCity()
     .subscribe(res=>{ 
       console.log(res);
         this.OnlyCitiesHotels=res
         console.log(this.OnlyCitiesHotels);
     
     },err=>{
       console.log(err);
     });
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
   async getValues(form):Promise<void>{
    console.log("Topothesia: "+form.value.Location) 
    //this.router.navigateByUrl('home');

  }
  ngOnInit(){
    this.image=this.img.getProducts();
    console.log(this.image)
  }
  openDetailsWithQueryParams(user){
    console.log(user)
     let nav:NavigationExtras={
       queryParams:{
         special:JSON.stringify(user)
       }
     }
     this.router.navigate(['hotel-results'],nav)
   }


}
