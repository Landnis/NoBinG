import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, LoadingController } from '@ionic/angular';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  cart=[];
  items=[];
  sliderConfig={
    spaceBetween:10,
    centeredSlides:true,
    slidesPerView:0
  }
  constructor(public platform:Platform,public loadingControl:LoadingController,private router:Router,private cartService:CartService) {
    this.platform.ready().then(()=>{
      this.loadingControl.create({
        message:"Loading..."
      }).then((loadingElement)=>{
        loadingElement.present();
        var ref =this;
        setTimeout(function(){
          ref.loadingControl.dismiss();
        },1000)
      })
    })
   }

   ngOnInit() {
    this.cart=this.cartService.getCart();
    this.items=this.cartService.getProducts();
  }
  addToCart(product){
    this.cartService.AddProduct(product);
  }
  openCart(){
    this.router.navigate(['hotels'])
  } 
}
