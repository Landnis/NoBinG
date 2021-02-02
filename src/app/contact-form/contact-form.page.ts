import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { async } from '@angular/core/testing';
import {ApiService} from '../api.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController,Platform ,LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {

  constructor(private loadingControl:LoadingController,private platform:Platform,private toast:ToastController,private alertCtrl:AlertController,private router:Router,private api:ApiService) { }
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
      message: 'Το Μήνυμα σας Στάλθηκε Επιτυχώς..',
      duration: 5000
    });
    toast.present();
  }
  ngOnInit() {
  }

  goToLogin(){
    this.router.navigateByUrl('login');
  }
  async getValues(form):Promise<void>{

    console.log("Hello "+form.value.name+" "+form.value.surname+" Ta sxolia sou einai: "+form.value.comment) 
  }
  SendEmail(form){
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
    this.api.SendEmailFromContactForm(form.value).subscribe((res)=>{
      this.router.navigateByUrl('home')
      console.log(res)
      if(res == null){
        this.presentAlert();
        console.log(null);
      }else{
        console.log('Mail Sent !!')
        
        this.presentToast();
        form.reset();
        this.router.navigateByUrl('home')
      }
    })
  }
}
