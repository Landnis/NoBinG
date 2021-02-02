import { Component, Input, OnInit,ViewChild } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import {ApiService} from '../api.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hotel-results',
  templateUrl: './hotel-results.page.html',
  styleUrls: ['./hotel-results.page.scss'],
})
export class HotelResultsPage implements OnInit {
  datareceived:string="";
  AllHotels:any;
  data:any;
  constructor(private toast:ToastController,private alertCtrl:AlertController,private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special){
        console.log("Params: ",params)
       this.data=JSON.parse(params.special)
      }
    })
  }
  async  presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Προσοχή',
      subHeader: 'Υπάρχει κενό Πεδίο',
      message: 'Συμπλήρωσε Ξανά την Φόρμα',
      buttons: ['OK']
    });
   await alert.present();
  }
  async getAllHotels(){
    await this.api.getAllHotels()
    .subscribe(res=>{ 
      console.log(res);
        this.AllHotels=res
        console.log(this.AllHotels);
    
    },err=>{
      console.log(err);
    });
  }

 postRooms(form){
    console.log(form.value.Category);
   
  if(form.value.Category=="Standard"){
      form.value.price="30"
  }
  if(form.value.Category=="Studio"){
      form.value.price="25"
  }
  if(form.value.Category=="Villa"){
      form.value.price="70"
  }
  if(form.value.Category=="Penthouse"){
      form.value.price="120"
  }
   this.api.postRooms(form.value).subscribe((res)=>{
      console.log(res)
    
      if(res == null){
        this.presentAlert();
        console.log(null);
      }else{
        console.log(res)
        this.openDetailsWithQueryParams(this.data,form)
        form.reset();
      }
    })
  }
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Τα Στοιχεια καταχωρήθηκαν',
      duration: 2000
    });
    toast.present();
  }

  getValues(form){
  console.log("Τιμη Δωματίου: "+form.value.price+"Ειδος Δωματίου: "+form.value.Eidos+ " Αριθμός Δωματίων: "+form.value.arithmosKrevatiwn+" Αριθμός Επισκεπτών: "+form.value.arithmosAtomwn+" Check-In:"+form.value.checkIn+" Check-Out: "+form.value.checkOut )
  }

  ngOnInit() {
  }

  openDetailsWithQueryParams(data,form){
    console.log(data)
    console.log(form.value)
    let nav:NavigationExtras={
      queryParams:{
        special:JSON.stringify(this.data),
        special2:JSON.stringify(form.value)
      }
    }
    this.route.navigate(['hotel-reserved'],nav)
  }

}
