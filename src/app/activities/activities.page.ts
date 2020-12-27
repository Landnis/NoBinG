import { Component, OnInit, ViewChild } from'@angular/core';
import { IonSearchbar } from '@ionic/angular';
import {ApiService}from '../api.service';
import { NavigationExtras, Router } from '@angular/router';
import {  NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  OnlyCitiesactivities:any;
  Allactivities:any;   
   constructor(public navCtrl: NavController,private api:ApiService,private router:Router){
      this.getActivitiesCity();
      this.getActivities();
   }
   async getActivitiesCity(){
     await this.api.getActivitiesCity()
     .subscribe(res=>{ 
       console.log(res);
         this.OnlyCitiesactivities=res
         console.log(this.OnlyCitiesactivities);
     
     },err=>{
       console.log(err);
     });
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
 
 /*  ionViewDidEnter(){
     setTimeout(()=>{
       this.search.setFocus();
     })
     
   }
   _ionChange(event){
     const val=event.target.value;
     console.log(val.trim())
     if(val && val.trim() != ' '){
       this.activities=this.activities.filter((item:any)=>{
         return (item.city.toLowerCase().indexOf(val.toLowerCase()) > -1)
       })
   
     }
   }*/
   ngOnInit(){
     
   }
   async getValues(form):Promise<void>{
     console.log("Topothesia: "+form.value.Location) 
     //this.router.navigateByUrl('home');
 
   }
   async getActivity(form):Promise<void>{
    // console.log("Activities: "+form.value.name) 
     //this.router.navigateByUrl('home');
 
   }
   onClickDetails(user){
  
     this.router.navigate(['activities-search-page'],{queryParams:{id:user.Activity_Id,name:user.activity_name}});
     }

     openDetailsWithQueryParams(user){
       console.log(user)
        let nav:NavigationExtras={
          queryParams:{
            special:JSON.stringify(user)
          }
        }
        this.router.navigate(['activities-results'],nav)
      }

}
