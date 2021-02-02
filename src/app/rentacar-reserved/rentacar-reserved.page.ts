import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

import { AlertController,Platform ,LoadingController} from '@ionic/angular';
@Component({
  selector: 'app-rentacar-reserved',
  templateUrl: './rentacar-reserved.page.html',
  styleUrls: ['./rentacar-reserved.page.scss'],
})
export class RentacarReservedPage implements OnInit {
  data2:any;
  users:any;
  date:any
  vehicle:any;
  reservedId:any;
  VehicleReservedList=[
  
  ]
  checkIn:any;
  checkOut:any;
  constructor(private loadingControl:LoadingController,private platform:Platform,private toast:ToastController,private alertCtrl:AlertController,private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special && params.special2 && params.special3){
        console.log("Params: ",params)
       this.date=JSON.parse(params.special2)
       this.data2=JSON.parse(params.special)
       this.vehicle=JSON.parse(params.special3)
       this.checkIn=moment(this.date.checkIn).format('DD-MM-YYYY')
      this.checkOut=moment(this.date.checkOut).format('DD-MM-YYYY')

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
  async presentToast() {
    const toast = await this.toast.create({
      cssClass: 'class',
      message: 'Η Κράτηση Οχήματος Έγινε Επιτυχώς..',
      duration: 5000
    });
    toast.present();
  }

  ngOnInit() {
  }
  ReservedVehicle(form){
    form.value.userId=this.reservedId
    form.value.officeId=this.data2.id_office
    form.value.vihecle_type=this.vehicle.category
    form.value.CheckIn=this.date.checkIn
    form.value.CheckOut=this.date.checkOut
   
    this.api.ReservedVehicle(form.value).subscribe((res)=>{
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log('Vehicle RESERVED!!!')
        form.reset();
        this.SendReservedMailVehicle(this.VehicleReservedList)
      }
    });
  }

  SendReservedMailVehicle(VehicleReservedList){
    this.VehicleReservedList.push(this.users)
    this.VehicleReservedList.push(this.vehicle)
    this.VehicleReservedList.push(this.data2)
    const checkin=moment(this.date.checkIn).format('DD-MM-YYYY')
    const checkout=moment(this.date.checkOut).format('DD-MM-YYYY')

    this.VehicleReservedList.push(checkin);
    this.VehicleReservedList.push(checkout)
    console.log(VehicleReservedList[0],VehicleReservedList[1],VehicleReservedList[2],VehicleReservedList[3],VehicleReservedList[4])
    console.log(VehicleReservedList[0].mail)
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
    this.api. SendReservedMailVehicle(VehicleReservedList).subscribe((res)=>{
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
    console.log("Vehicle Reserved")
    console.log("Details: "+form)
  }
}
