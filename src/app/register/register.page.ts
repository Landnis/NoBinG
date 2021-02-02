import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, NavParams, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  addUser: any;
  allusers: any;
  constructor(private api: ApiService, private router: Router, private alertCtrl: AlertController) {
    this.getAllUsers();
  }
 async  presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Υπάρχον Email',
      subHeader: 'Υπάρχει Χρήστης με αυτο το mail..δωσε αλλο',
      message: 'Πληκτρολόγησε Νέο Email..',
      buttons: ['OK']
    });
   await alert.present();
  }

 
  ngOnInit() {
  }

  openDetailsWithQueryParams(form){
    
     let nav:NavigationExtras={
       queryParams:{
         special:JSON.stringify(form)
       }
     }
     this.router.navigate(['home'],nav)
   }
   register(form) {

    // console.log(form.value.mail)
    
    this.api.getLoginUsers(form.value).subscribe((res)=>{
      console.log(res[0])
     
    })


  }
  getRegisterUSer(form){
    this.api.getRegisterUSer(form.value).subscribe((res)=>{
      console.log(res)

     if(res !== null){
       console.log('Δεν υπαρχει χρηστης')
       this.api.postRegisterData(form.value).subscribe((data)=>{
         console.log("Συνδεθήκατε !!!")
         this.openDetailsWithQueryParams(res[0])
         //this.router.navigateByUrl('home');
       })

     }else{ 
      this.presentAlert();
      console.log('Υπάρχει χρηστης με αυτο το μειλ')
      form.reset();
      console.log(form.value.mail)
     }
    })
  }



  async getAllUsers() {
    await this.api.getAllUsers()
      .subscribe(res => {
        console.log(res);
        this.allusers = res
        console.log(this.allusers);
      }, err => {
        console.log(err);
      });
  }

  getValues(form) {
    console.log(form.value)
  }


}
