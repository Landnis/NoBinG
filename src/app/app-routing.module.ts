import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'start-panel',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'start-panel',
    loadChildren: () => import('./start-panel/start-panel.module').then( m => m.StartPanelPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then( m => m.HotelsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact-form',
    loadChildren: () => import('./contact-form/contact-form.module').then( m => m.ContactFormPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'museums',
    loadChildren: () => import('./museums/museums.module').then( m => m.MuseumsPageModule)
  },
  {
    path: 'hotels-search',
    loadChildren: () => import('./hotels-search/hotels-search.module').then( m => m.HotelsSearchPageModule)
  },
  {
    path: 'hotel-results',
    loadChildren: () => import('./hotel-results/hotel-results.module').then( m => m.HotelResultsPageModule)
  },
  {
    path: 'activities-results',
    loadChildren: () => import('./activities-results/activities-results.module').then( m => m.ActivitiesResultsPageModule)
  },
  {
    path: 'car-rent',
    loadChildren: () => import('./car-rent/car-rent.module').then( m => m.CarRentPageModule)
  },
  {
    path: 'museum-results',
    loadChildren: () => import('./museum-results/museum-results.module').then( m => m.MuseumResultsPageModule)
  },
  {
    path: 'restaurant-results',
    loadChildren: () => import('./restaurant-results/restaurant-results.module').then( m => m.RestaurantResultsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'reserved-activity',
    loadChildren: () => import('./reserved-activity/reserved-activity.module').then( m => m.ReservedActivityPageModule)
  },
  {
    path: 'restaurant-reserved',
    loadChildren: () => import('./restaurant-reserved/restaurant-reserved.module').then( m => m.RestaurantReservedPageModule)
  },
  {
    path: 'museum-reserved',
    loadChildren: () => import('./museum-reserved/museum-reserved.module').then( m => m.MuseumReservedPageModule)
  },
  {
    path: 'hotel-reserved',
    loadChildren: () => import('./hotel-reserved/hotel-reserved.module').then( m => m.HotelReservedPageModule)
  },
  {
    path: 'rentacar-reserved',
    loadChildren: () => import('./rentacar-reserved/rentacar-reserved.module').then( m => m.RentacarReservedPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
