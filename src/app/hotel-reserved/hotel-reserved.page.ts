import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
import { ToastController } from '@ionic/angular';
import { AlertController,Platform ,LoadingController} from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-hotel-reserved',
  templateUrl: './hotel-reserved.page.html',
  styleUrls: ['./hotel-reserved.page.scss'],
})
export class HotelReservedPage implements OnInit {
  data2:any;
  users:any;
  roomId:any;
  room:any;
  reservedId:any;
  HotelReservedList=[
  
  ]
  checkIn:any;
  checkOut:any;
  
  constructor(private loadingControl:LoadingController,private platform:Platform,private toast:ToastController,private alertCtrl:AlertController,private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special && params.special2){
        console.log("Params: ",params)
       this.room=JSON.parse(params.special2)
       this.data2=JSON.parse(params.special)
      this.checkIn=moment(this.room.CheckIn).format('DD-MM-YYYY')
      this.checkOut=moment(this.room.CheckOut).format('DD-MM-YYYY')
      }
    })
    this.users=this.api.UserId
    this.roomId=this.api.RoomsId
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
  async presentToast() {
    const toast = await this.toast.create({
      cssClass: 'class',
      message: 'Η Κράτηση Ξενοδοχείου Έγινε Επιτυχώς..',
      duration: 5000
    });
    toast.present();
  }

  ngOnInit() {
  }
  ReservedHotel(form){
    form.value.userId=this.reservedId
    form.value.roomID=this.roomId
    form.value.hotelId=this.data2.id_hotel
    
    form.value.numberOfRooms=10
    console.log(form)
    this.api.ReservedHotel(form.value).subscribe((res)=>{
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log('Hotel RESERVED!!!')
        form.reset();
        this.SendReservedMailHotel(this.HotelReservedList)
        
      }
    });
  }

  SendReservedMailHotel(HotelReservedList){
    this.HotelReservedList.push(this.users)
    this.HotelReservedList.push(this.room)
    this.HotelReservedList.push(this.data2)
    this.HotelReservedList.push(this.checkIn)
    this.HotelReservedList.push(this.checkOut)

    console.log(HotelReservedList[0],HotelReservedList[1],HotelReservedList[2],HotelReservedList[3],HotelReservedList[4])
    console.log(HotelReservedList[0].mail)
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
    this.api.SendReservedMailHotel(HotelReservedList).subscribe((res)=>{
      console.log(res);
      if(res == null){
        this.presentAlert()
      }else{
        this.presentToast()
        this.route.navigateByUrl('home')
      }
    });
  }

  getValues(form){
    console.log("Hotel Reserved")
    console.log("Details: "+form.value)
  }
}
