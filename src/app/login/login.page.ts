import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { async } from '@angular/core/testing';
import { ApiService } from '../api.service';
import { NavigationExtras} from '@angular/router';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 user:any;
  constructor(private authService: AuthService, private router: Router,
    private alertCtrl: AlertController,private api: ApiService) {

  }
  async  presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Λάθος Email',
      subHeader: 'Wrong Email',
      message: 'Πληκτρολόγησε Νέο Email..',
      buttons: ['OK']
    });
   await alert.present();
  }

  async  presentAlertPassword() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Λάθος Κωδικός',
      message: 'Πληκτρολόγησε Νέο Password..',
      buttons: ['OK']
    });
   await alert.present();
  }
  ngOnInit() {
  }
   openDetailsWithQueryParams(form){
    console.log(form)
     let nav:NavigationExtras={
       queryParams:{
         special:JSON.stringify(form)
       }
     }
     this.router.navigate(['home'],nav)
   }
  getLoginUsers(form) {
    this.api.getLoginUsers(form.value).subscribe((results) => {
      console.log(results);

      if (results !== null && results[0].mail == form.value.email) {
        if (form.value.email == "kostas.stergiannis98@gmail.com" && form.value.password == "111111") {
          console.log("Welcome Admin !!!")
          this.router.navigateByUrl('admin-dashboard');
        } else {
          this.user=results[0].id_users
          console.log("Welcome User!!"+this.user)
          form.reset();
          this.openDetailsWithQueryParams(results[0]);
          //this.router.navigateByUrl('home');
        }

      } else {
        if (results == 'Not succeed') {
          this.presentAlertPassword()
          //alert("Wrong Password Try again")
          console.log("Wrong Password")
        } else {
          this.presentAlert();
          //alert('Invalid Email..')
          console.log("Invalid Email")
        }

      }
    });
    

  }
  
  goTosignUp() {
    this.router.navigateByUrl('register');
  }


}
