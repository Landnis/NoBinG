import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

import { AlertController,Platform ,LoadingController} from '@ionic/angular';
@Component({
  selector: 'app-restaurant-reserved',
  templateUrl: './restaurant-reserved.page.html',
  styleUrls: ['./restaurant-reserved.page.scss'],
})
export class RestaurantReservedPage implements OnInit {
  data:any;
  restaurants:any;
  user:any;
  reservedId:any;
  RestaurantReservedList=[]
  date:any;
  constructor(private loadingControl:LoadingController,private platform:Platform,private toast:ToastController,private alertCtrl:AlertController,private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special && params.special2){
        console.log("Params: ",params)
       this.data=JSON.parse(params.special)
       this.restaurants=JSON.parse(params.special2)
       this.date= moment(this.restaurants.Whitch_Day).format('DD-MM-YYYY')

      }
    })
    this.user=this.api.UserId
    this.reservedId=this.api.registerId
   }
   async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Υπάρχει Καποιο Λάθος στην Εισαγωγή σου',
      message: 'Ξαναγράψε τα Στοιχεία',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }
  ReservedRestaurants(form) {
    console.log("To Id Tou xristi einai: "+this.user)
    form.value.userId=this.reservedId;
    form.value.restaurantId=this.data.restaurant_id
    form.value.Whitch_Day=this.restaurants.Whitch_Day
    form.value.people=this.restaurants.people
    console.log(form.value)
    this.api.ReservedRestaurants(form.value).subscribe((res)=>{
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log('Restaurants RESERVED')
        this.SendReservedMailRestaurant(this.RestaurantReservedList)
      }
    })
  }
  SendReservedMailRestaurant(RestaurantReservedList){
    this.RestaurantReservedList.push(this.user)
    this.RestaurantReservedList.push(this.data)
    this.RestaurantReservedList.push(this.restaurants)
    const date=moment(this.restaurants.Whitch_Day).format('DD-MM-YYYY')
    this.RestaurantReservedList.push(date)

    console.log(RestaurantReservedList[0],RestaurantReservedList[1],RestaurantReservedList[2])
    console.log(RestaurantReservedList[0].mail)
    this.platform.ready().then(()=>{
      this.loadingControl.create({
        message:"Loading..."
      }).then((loadingElement)=>{
        loadingElement.present();
        var ref =this;
        setTimeout(function(){
          ref.loadingControl.dismiss();
        },2500)
      })
    })
    this.api.SendReservedMailRestaurant(RestaurantReservedList).subscribe((res)=>{
      console.log(res);
      if(res == null){
        this.presentAlert()
      }else{
        
        this.presentToast()
        this.route.navigateByUrl('home')
      }
    });
  }
  async presentToast() {
    const toast = await this.toast.create({
      cssClass: 'class',
      message: 'Η Κράτηση Εστιατορίου Έγινε Επιτυχώς..',
      duration: 5000
    });
    toast.present();
  }

}
