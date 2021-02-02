import { Component } from '@angular/core';
import { firebaseConfig } from './firebase.config';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import firebase from "firebase/app";
import { Router,ActivatedRoute } from '@angular/router';

import {ApiService} from "./api.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  LoginUsers:any;
  data:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private api:ApiService
  ) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.special){
        console.log("Params: ",params)
       this.data=JSON.parse(params.special)
      }
    })
    this.initializeApp();
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    firebase.initializeApp(firebaseConfig);
  }


  
}
