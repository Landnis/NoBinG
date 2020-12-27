import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  async getValues(form):Promise<void>{
    console.log("Topothesia: "+form.value.Location) 
    this.router.navigateByUrl('hotels-search');
  }
}
