import { Component, OnInit, ViewChild } from '@angular/core';
import {ApiService} from '../api.service';
import {Router,ActivatedRoute} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  NumberOfCities:any;
  GroupOfHotels:any;
  offices:any;
  GroupOfOffices:any;
  NumberOfActivities:any;
  GroupOfActivities:any;
  museums:any;
  GroupOfMuseums:any;
  restaurants:any;
  GroupOfRestaurants:any;
  GroupOfVehicles:any;
  AllVehicles:any;
  AllUsers:any;
  users:any;
  data:any;
  AllHotels:any;
  HotelReservation:any;
  VehicleReservation:any;
  AllRooms:any;
  AllOffices:any;
  AllVehiclesReserved:any;
  AdminActivities:any;
  ActivitiesReservation:any;
  AdminRestaurants:any;
  RestaurantsReservation:any;
  AdminMuseums:any;
  MuseumsReservation:any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private activatedRoute:ActivatedRoute,private toast:ToastController,private alertCtrl:AlertController,private api:ApiService,private router:Router) {
    
    this.getNumberOfHotels();
    this.getGroupOfHotels();
    this.getNumberOfOffices();
    this.getGroupOfOffices();
    this.getNumberOfActivities();
    this.getGroupOfActivities();
    this.getNumberOfMuseums();
    this.getGroupOfMuseums();
    this.getGroupOfRestaurants();
    this.getNumberOfRestaurants();
    this.getGroupOfVehicles();
    this.getVehicles();
    this.getNumberOfUsers();
    this.getAllUsers();
    this.getHotelReservations();
    this.getVehicleReservations();
    this.getHotelsForAdmin();
    this.getRooms();
    this.getOffices();
    this.getAllVehicles();
    this.getAdminActivities();
    this.getActivitiesReservations();
    this.getAdminRestaurants();
    this.getRestaurantseservations();
    this.getAdminMuseums();
    this.getMuseumseservations();
   }

   loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.NumberOfCities.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Υπάρχει Καποιο Λάθος στην Εισαγωγή σου',
      message: 'Ξαναγράψε τα Στοιχεία της Εισαγωγής ',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }
  postHotels(form){
    this.api.postHotels(form.value).subscribe((res)=>{
      //console.log(res)
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log(res)
        this.presentToast();
        form.reset();
      }
    })
  }
  postOffice(form2){
    this.api.postOffice(form2.value).subscribe((res)=>{
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log(res)
        this.presentToast();
        form2.reset();
      }
    })
  }

  postActivities(form3){
    this.api.postActivities(form3.value).subscribe((res)=>{
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log(res)
        this.presentToast();
        form3.reset();
      }
   
    })
  }
  postMuseums(form4){
    this.api.postMuseums(form4.value).subscribe((res)=>{
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log(res)
        this.presentToast();
        form4.reset();
      }
    })
  }

  postRestaurants(form5){
    this.api.postRestaurants(form5.value).subscribe((res)=>{
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log(res)
        this.presentToast();
        form5.reset();
      }
    })
  }

  postVehicle(form6){
    this.api.postVehicle(form6.value).subscribe((res)=>{
      console.log(res)
      if(res == null){
        this.presentAlert()
      }else{
        console.log(res)
        this.presentToast();
        form6.reset();
      }
    })
  }
 async getNumberOfHotels() {
    await this.api.getNumberOfHotels()
    .subscribe(res=>{ 
      console.log(res);
        this. NumberOfCities=res
        console.log(this.NumberOfCities);
    
    },err=>{
      console.log(err);
    });
  }
 async getGroupOfHotels(){
    await this.api.getGroupOfHotels()
    .subscribe(res=>{ 
      console.log(res);
        this.GroupOfHotels=res
        console.log(this.GroupOfHotels);
    
    },err=>{
      console.log(err);
    });
  }
  async getNumberOfOffices(){
    await this.api.getNumberOfOffices()
    .subscribe(res=>{ 
      console.log(res);
        this.offices=res
        console.log(this.offices);
    
    },err=>{
      console.log(err);
    });
  }

  async getGroupOfOffices(){
    await this.api.getGroupOfOffices()
    .subscribe(res=>{ 
      console.log(res);
        this.GroupOfOffices=res
        console.log(this.GroupOfOffices);
    
    },err=>{
      console.log(err);
    });
  }

  async getNumberOfActivities(){
    await this.api.getNumberOfActivities()
    .subscribe(res=>{ 
      console.log(res);
        this.NumberOfActivities=res
        console.log(this.NumberOfActivities);
    
    },err=>{
      console.log(err);
    });
  }

  async getGroupOfActivities(){
    await this.api.getGroupOfActivities()
    .subscribe(res=>{ 
      console.log(res);
        this.GroupOfActivities=res
        console.log(this.GroupOfActivities);
    
    },err=>{
      console.log(err);
    });
  }

  async getNumberOfMuseums(){
    await this.api.getNumberOfMuseums()
    .subscribe(res=>{ 
      console.log(res);
        this.museums=res
        console.log(this.museums);
    
    },err=>{
      console.log(err);
    });
  }

  async getGroupOfMuseums(){
    await this.api.getGroupOfMuseums()
    .subscribe(res=>{ 
      console.log(res);
        this.GroupOfMuseums=res
        console.log(this.GroupOfMuseums);
    
    },err=>{
      console.log(err);
    });
  }
  async getNumberOfRestaurants(){
    await this.api.getNumberOfRestaurants()
    .subscribe(res=>{ 
      console.log(res);
        this.restaurants=res
        console.log(this.restaurants);
    
    },err=>{
      console.log(err);
    });
  }

  async getGroupOfRestaurants(){
    await this.api.getGroupOfRestaurants()
    .subscribe(res=>{ 
      console.log(res);
        this.GroupOfRestaurants=res
        console.log(this.GroupOfRestaurants);
    
    },err=>{
      console.log(err);
    });
  }
  async getGroupOfVehicles(){
    await this.api.getGroupOfVehicles()
    .subscribe(res=>{ 
      console.log(res);
        this.GroupOfVehicles=res
        console.log(this.GroupOfVehicles);
    
    },err=>{
      console.log(err);
    });
  }

  async getVehicles(){
    await this.api.getVehicles()
      .subscribe(res=>{ 
        console.log(res);
        this.AllVehicles=res
        console.log(this.AllVehicles);
  },err=>{
    console.log(err);
   });
  }
 async getAllUsers(){
    await this.api.getAllUsers()
      .subscribe(res=>{ 
        console.log(res);
        this.AllUsers=res
        console.log(this.AllUsers);
  },err=>{
    console.log(err);
   });
  }
  async getNumberOfUsers(){
    await this.api.getNumberOfUsers()
      .subscribe(res=>{ 
        console.log(res);
        this.users=res
        console.log(this.users);
  },err=>{
    console.log(err);
   });
  }
  async  getHotelReservations(){
    await this.api.getHotelReservations()
      .subscribe(res=>{ 
        console.log(res);
        this.HotelReservation=res
        console.log(this.HotelReservation);
  },err=>{
    console.log(err);
   });
  }
  async getHotelsForAdmin(){
    await this.api.getHotelsForAdmin()
    .subscribe(res=>{ 
      console.log(res);
        this.AllHotels=res
        console.log(this.AllHotels);
    
    },err=>{
      console.log(err);
    });
  }
  async getRooms(){
    await this.api.getRooms()
    .subscribe(res=>{ 
      console.log(res);
        this.AllRooms=res
        console.log(this.AllRooms);
    
    },err=>{
      console.log(err);
    });
  }

  async getVehicleReservations(){
    await this.api.getVehicleReservations()
      .subscribe(res=>{ 
        console.log(res);
        this.VehicleReservation=res
        console.log(this.VehicleReservation);
  },err=>{
    console.log(err);
   });
  }
 async getAllVehicles(){
    await this.api.getAllVehicles()
    .subscribe(res=>{ 
      console.log(res);
      this.AllVehiclesReserved=res
      console.log(this.AllVehiclesReserved);
  },err=>{
  console.log(err);
  });
  }
  async getOffices(){
    await this.api.getOffices()
    .subscribe(res=>{ 
      console.log(res);
      this.AllOffices=res
      console.log(this.AllOffices);
    },err=>{
    console.log(err);
    });
  }

 async getAdminActivities(){
  await this.api.getAdminActivities()
  .subscribe(res=>{ 
    console.log(res);
    this.AdminActivities=res
    console.log(this.AdminActivities);
  },err=>{
  console.log(err);
  });
 }
 async getActivitiesReservations(){
  await this.api.getActivitiesReservations()
    .subscribe(res=>{ 
      console.log(res);
      this.ActivitiesReservation=res
      console.log(this.ActivitiesReservation);
  },err=>{
     console.log(err);
    });
  }
  async getRestaurantseservations(){
    await this.api.getRestaurantsReservations()
      .subscribe(res=>{ 
        console.log(res);
        this.RestaurantsReservation=res
        console.log(this.RestaurantsReservation);
    },err=>{
       console.log(err);
      });
    }

  async getAdminRestaurants(){
    await this.api.getAdminRestaurants()
    .subscribe(res=>{ 
      console.log(res);
      this.AdminRestaurants=res
      console.log(this.AdminRestaurants);
  },err=>{
     console.log(err);
    });
  }
  async getMuseumseservations(){
    await this.api.getMuseumsReservations()
      .subscribe(res=>{ 
        console.log(res);
        this.MuseumsReservation=res
        console.log(this.MuseumsReservation);
    },err=>{
       console.log(err);
      });
    }

  async getAdminMuseums(){
    await this.api.getAdminMuseums()
    .subscribe(res=>{ 
      console.log(res);
      this.AdminMuseums=res
      console.log(this.AdminMuseums);
  },err=>{
     console.log(err);
    });
  }
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }






  getValues(form){
    console.log("Values: "+form.value)
    this.router.navigateByUrl('admin-dashboard')
  }

}
