import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) {

   }
  ngOnInit() {
  }
  async loginUser(form):Promise<void>{
    this.authService.loginUser(form.value.email,form.value.password).then(()=>{
      if(form.value.email=="kostas.stergiannis98@gmail.com" && form.value.password=="222222"){
        console.log("Welcome Admin !!!")
        this.router.navigateByUrl('password-reset');
      }else{
        console.log("Welcome User!!")
      this.router.navigateByUrl('home');
      }
    },
    async error => {
      const alert =await this.alertCtrl.create({
        message:error.message,
        buttons:[{text:'ok',role:'cancel'}],
      });
      await alert.present();
    });

  }
  goToReset(){
    this.router.navigateByUrl('password-reset');
  }
  goTosignUp(){
    this.router.navigateByUrl('sign-up'); 
  }
}
