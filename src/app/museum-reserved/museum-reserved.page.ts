import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { AlertController,Platform ,LoadingController} from '@ionic/angular';
@Component({
  selector: 'app-museum-reserved',
  templateUrl: './museum-reserved.page.html',
  styleUrls: ['./museum-reserved.page.scss'],
})
export class MuseumReservedPage implements OnInit {
  data:any;
  users:any;
  museums:any;
  reservedId:any;
  MuseumReservedList=[]
  date:any;

  constructor(private toast:ToastController,private alertCtrl:AlertController,private loadingControl:LoadingController,private platform:Platform,private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special && params.special2){
        console.log("Params: ",params)
       this.museums=JSON.parse(params.special2)
       this.data=JSON.parse(params.special)
      }
    })
    this.users=this.api.UserId
    this.reservedId=this.api.registerId
    this.date= moment(this.museums).format('DD-MM-YYYY')

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
      message: 'Η Κράτηση Έγινε Επιτυχώς..',
      duration: 5000
    });
    toast.present();
  }

  ngOnInit() {
  }
  ReservedMuseums(form){
    form.value.userId=this.reservedId
    form.value.museumId=this.data.museum_id
    form.value.reservDay=this.museums.reservDay
    this.api.ReservedMuseums(form.value).subscribe((res)=>{
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log('RESERVED')

        this.SendReservedMailMuseum(this.MuseumReservedList)

      }
    });
  }

  SendReservedMailMuseum(MuseumReservedList){
    this.MuseumReservedList.push(this.users)
    this.MuseumReservedList.push(this.data)
    const date= moment(this.museums).format('DD-MM-YYYY')
    this.MuseumReservedList.push(date)
    console.log(MuseumReservedList[0],MuseumReservedList[1],MuseumReservedList[2])
    console.log(MuseumReservedList[0].mail)
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
    this.api.SendReservedMailMuseum(MuseumReservedList).subscribe((res)=>{
      console.log(res);
      if(res == null){
        this.presentAlert()
      }else{
       
        this.presentToast()
        this.route.navigateByUrl('home')
      }
    });
  }
  getValues(){
    console.log("Reserved Done!!!!")
  }

}
