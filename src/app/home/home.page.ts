import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,Platform  } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import {LoadingController} from '@ionic/angular';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  AllHotels:any;
  Allactivities:any;  
  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController,public platform:Platform,public loadingControl:LoadingController,private api:ApiService) {
      
      this.getActivities();
      this. getAllHotels();
      this.platform.ready().then(()=>{
        this.loadingControl.create({
          message:"Loading..."
        }).then((loadingElement)=>{
          loadingElement.present();
          var ref =this;
          setTimeout(function(){
            ref.loadingControl.dismiss();
          },1500)
        })
      })
     } 
     async logOut():Promise<void>{
      this.authService.logOutUser().then(()=>{
        this.router.navigateByUrl('login');
      },
      async error => {
        const alert =await this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok',role:'cancel'}],
        });
        await alert.present();
      });
  
    }
    goToLogin(){
      this.router.navigateByUrl('login');
    }
    goToReset(){
      this.router.navigateByUrl('password-reset');
    }
    goTosignUp(){
      this.router.navigateByUrl('sign-up'); 
    }
    onActivities(){
      this.router.navigateByUrl('activities');
    }
    onCars(){
      this.router.navigateByUrl('cars');
    }
    openCart(){
      
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
    async getValues(form):Promise<void>{
      console.log("Topothesia: "+form.value.Location) 
      //this.router.navigateByUrl('home');
  
    }
    
   
}
