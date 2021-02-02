import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

import { AlertController,Platform ,LoadingController} from '@ionic/angular';
import { resetFakeAsyncZone } from '@angular/core/testing';
@Component({
  selector: 'app-reserved-activity',
  templateUrl: './reserved-activity.page.html',
  styleUrls: ['./reserved-activity.page.scss'],
})
export class ReservedActivityPage implements OnInit {
  data2:any;
  users:any;
  date:any;
  reservedId:any;
  ActivityReservedList=[]
  newDate:any;
  constructor(private loadingControl:LoadingController,private platform:Platform,private toast:ToastController,private alertCtrl:AlertController,private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special && params.special2){
        console.log("Params: ",params)
        this.date=JSON.parse(params.special2)
        this.data2=JSON.parse(params.special)
        this.newDate=moment(this.date.checkIn).format('DD-MM-YYYY')

      }
    })
    this.users=this.api.UserId
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
   getValues(){
     console.log("Reserved Done!!!!")
   }
   ReservedActivities(form){
    form.value.userId=this.reservedId
    form.value.activitiesId=this.data2.Activity_Id
    form.value.activitiesDate=this.date.checkIn
   
    this.api.ReservedActivities(form.value).subscribe((res)=>{
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log('RESERVED')
        this.SendReservedMailActivity(this.ActivityReservedList)
      }
    });
  }
  SendReservedMailActivity(ActivityReservedList){
    this.ActivityReservedList.push(this.users)
    this.ActivityReservedList.push(this.data2)
    this.ActivityReservedList.push(this.newDate)
    console.log(ActivityReservedList[0],ActivityReservedList[1],ActivityReservedList[2])
    console.log(ActivityReservedList[0].mail)
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
    this.api.SendReservedMailActivity(ActivityReservedList).subscribe((res)=>{
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
        message: 'Η Κράτηση Έγινε Επιτυχώς..',
        duration: 3000
      });
      toast.present();
    }


   }
   
  
 


