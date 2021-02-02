import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, take } from 'rxjs/operators';



const apiUrl = "http://localhost:8080/Hotels";
const apiUrlActivities = "http://localhost:8080/activities";
const apiURLActivitySearch = "http://localhost:8080/activities/search"
const apiURLHotelsName = "http://localhost:8080/Hotels/names"
const apiURLCarsOffice = "http://localhost:8080/RentCarsOffice"
const apiUrlcarsSearch = "http://localhost:8080/RentCarsOffice/OnlyCities"
const apiURLvehicle = "http://localhost:8080/GetAllCars"
const apiURLCarcategories = "http://localhost:8080/CarCategories"
const apiURLAllMuseums = "http://localhost:8080/AllMuseums"
const apiURLCitiesOfMuseums = "http://localhost:8080/CitiesOfmuseums"
const apiURLCitiesOfRestaurants = "http://localhost:8080/CitiesOfRestaurants"
const apiURLallRestaurants = "http://localhost:8080/AllRestaurants"
const apiURLPostRegisterData = "http://localhost:8080/register";
const apiURLGetLoginUsers = "http://localhost:8080/Login/users"
const apiUrlGetAllUsers = "http://localhost:8080/Allusers"
const apiUrlgetRegisterUser = 'http://localhost:8080/Register/users'
const apiUrlPostHotels='http://localhost:8080/postHotels';
const apiUrlPostOffice="http://localhost:8080/postOffice"
const apiUrlPostActivities="http://localhost:8080/postActivities"
const apiUrlPostMuseums="http://localhost:8080/postMuseums"
const apiUrlPostRestaurants="http://localhost:8080/postRestaurants"
const apiUrlPostVehicle="http://localhost:8080/postVehicle"
const apiURLNumberOfHotels="http://localhost:8080/NumberOfHotels"
const apiURLGroupOfHotels="http://localhost:8080/GroupOfHotels"
const apiURLNumberOfOffices="http://localhost:8080/NumberOfOffices"
const apiURLGroupOfOffices="http://localhost:8080/GroupOfOffices"
const apiURLNumberOfActivities="http://localhost:8080/NumberOfActivities"
const apiURLGroupOfActivities="http://localhost:8080/GroupOfActivities"
const apiURLNumberOfMuseums="http://localhost:8080/NumberOfMuseums"
const apiURLGroupOfMuseums="http://localhost:8080/GroupOfMuseums"
const apiURLNumberOfRestaurants="http://localhost:8080/NumberOfRestaurants"
const apiURLGroupOfRestaurants="http://localhost:8080/GroupOfRestaurants"
const apiURLGroupOfVehicle="http://localhost:8080/GroupOfVehicle"
const apiURLVehicles="http://localhost:8080/GetAllCarsAdmin"
const apiURLNumberOfUsers="http://localhost:8080/NumberOfUsers"
const apiUrlPostRooms="http://localhost:8080/postRooms"
const apiURLReservedRestaurants="http://localhost:8080/ReservedRestaurants"
const apiURLReservedActivities="http://localhost:8080/ReservedActivities"
const apiURLReservedMuseums="http://localhost:8080/ReservedMuseums"
const apiURLReservedHotel="http://localhost:8080/ReservedHotel"
const apiURLReservedVehicle="http://localhost:8080/ReservedVehicle"
const apiURLContactForm="http://localhost:8080/ContactForm"
const apiURLReservedHotelMail="http://localhost:8080/ReservedHotelMail"
const apiURLReservedVehicleMail="http://localhost:8080/ReservedVehicleMail"
const apiURLReservedMuseumMail="http://localhost:8080/ReservedMuseumMail"
const apiURLReservedRestaurantMail="http://localhost:8080/ReservedRestaurantMail"
const apiURLReservedActivityMail="http://localhost:8080/ReservedActivityMail"
const apiURLHotelReservations="http://localhost:8080/HotelReservations"
const apiURLgetHotelsForAdmin="http://localhost:8080/GetHotels"
const apiURLgetRooms="http://localhost:8080/GetRooms"
const apiURLVehicleReservations="http://localhost:8080/VehicleReservations"
const apiURLgetOffices="http://localhost:8080/Offices"
const apiURLgetActivities="http://localhost:8080/getActivities"
const apiURLActivitiesReservations="http://localhost:8080/ActivitiesReservations"
const apiURLRestaurantsReservations="http://localhost:8080/RestaurantsReservations"
const apiURLgetAdminRestaurants="http://localhost:8080/AdminRestaurants"
const apiURLMuseumsReservations="http://localhost:8080/MuseumsReservations"
const apiURLgetAdminMuseums="http://localhost:8080/AdminMuseums"
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };

  _tokenSub = new BehaviorSubject<string>('');
  token1$: Observable<String> = this._tokenSub.asObservable();
  UserId:any;
  RoomsId:any;
  registerId:any;
  constructor(private http: HttpClient) {
    this.token1$.subscribe(token => {
      this.httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        )
      };
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);

    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getAllHotels(): Observable<any> {
    return this.http.get(apiUrl, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getActivities() {
    return this.http.get(apiUrlActivities, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getActivitiesCity() {
    return this.http.get(apiURLActivitySearch, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getHotelsCity() {
    return this.http.get(apiURLHotelsName, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getAllCarRentalOffice() {
    return this.http.get(apiURLCarsOffice, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCitiesOfCarOffice() {
    return this.http.get(apiUrlcarsSearch, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );

  }

  getAllVehicles() {
    return this.http.get(apiURLvehicle, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCarCategories() {
    return this.http.get(apiURLCarcategories, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getAllMuseums() {
    return this.http.get(apiURLAllMuseums, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCitiesOfMuseums() {
    return this.http.get(apiURLCitiesOfMuseums, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getAllRestaurants() {
    return this.http.get(apiURLallRestaurants, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCitiesOfRestaurants() {
    return this.http.get(apiURLCitiesOfRestaurants, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  postRegisterData(form) {
    return this.http.post(apiURLPostRegisterData, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      }).pipe(map(user => {
        if(user !== null){
        console.log("user[0]"+user[1][0].UserId)
        this.registerId=user[1][0].UserId
        return user;}
        else{
          return null;
        }
      }))

  }

  getLoginUsers(form) {
    return this.http.post(apiURLGetLoginUsers, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      }).pipe(map(user => {
        if(user !== null){
        this._tokenSub.next(user[1]);
        console.log(user[1])
        console.log("Hellooooo USer:"+user[0].id_users)
        this.UserId=user[0];
        this.registerId=user[0].id_users
        return user;}
        else{
          return null;
        }
      }))

  }

  getRegisterUSer(form) {
    return this.http.post(apiUrlgetRegisterUser, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      }).pipe(map(user => {
        if(user !== null){
        this._tokenSub.next(user[1]);
        console.log(user[1])
        this.UserId=user[0]
        return user;}
        else{
          return null;
        }
      }))
  }

  getReservedUserId(){
   return this.UserId;
  }

  getAllUsers() {
    return this.http.get(apiUrlGetAllUsers, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  ///ADMIN PANEL /////
  postHotels(form) {
    return this.http.post(apiUrlPostHotels, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }
  
  postOffice(form) {
    return this.http.post(apiUrlPostOffice, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }

  postActivities(form) {
    return this.http.post(apiUrlPostActivities, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }
  postMuseums(form){
    return this.http.post(apiUrlPostMuseums, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }
  
  postRestaurants(form){
    return this.http.post(apiUrlPostRestaurants, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }
  postVehicle(form){
    return this.http.post(apiUrlPostVehicle, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }
  apiURLNumberOfHotels
  getNumberOfHotels() {
    return this.http.get(apiURLNumberOfHotels, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  apiURLGroupOfHotels
  getGroupOfHotels(){
    return this.http.get(apiURLGroupOfHotels, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  apiURLNumberOfOffices
  getNumberOfOffices(){
    return this.http.get(apiURLNumberOfOffices, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  apiURLGroupOfOffices
  getGroupOfOffices(){
    return this.http.get(apiURLGroupOfOffices, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  apiURLNumberOfActivities
  getNumberOfActivities(){
    return this.http.get(apiURLNumberOfActivities, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  apiURLGroupOfActivities
  getGroupOfActivities(){
    return this.http.get(apiURLGroupOfActivities, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  apiURLNumberOfMuseums
  getNumberOfMuseums(){
    return this.http.get(apiURLNumberOfMuseums, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getGroupOfMuseums(){
    return this.http.get(apiURLGroupOfMuseums, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getNumberOfRestaurants(){
    return this.http.get(apiURLNumberOfRestaurants, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getGroupOfRestaurants(){
    return this.http.get(apiURLGroupOfRestaurants, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getGroupOfVehicles(){
    return this.http.get(apiURLGroupOfVehicle, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  apiURLVehicles
  getVehicles(){
    return this.http.get(apiURLVehicles, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getNumberOfUsers(){
    return this.http.get(apiURLNumberOfUsers, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  postRooms(form) {
    return this.http.post(apiUrlPostRooms, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      }).pipe(map(user => {
        if(user !== null){
        this.RoomsId=user[1][0].RoomsId
        console.log("RoomsId: "+this.RoomsId);
        console.log("Reserved Details: "+user[2].Category)
        return user;}
        else{
          return null;
        }
      }))
  }

  ReservedRestaurants(form) {
    return this.http.post(apiURLReservedRestaurants, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }

  ReservedActivities(form){
    return this.http.post(apiURLReservedActivities,form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }

  ReservedMuseums(form){
    return this.http.post(apiURLReservedMuseums,form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }
  ReservedHotel(form){
    return this.http.post(apiURLReservedHotel,form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }
  apiURLReservedVehicle
  ReservedVehicle(form){
    return this.http.post(apiURLReservedVehicle,form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }

  SendEmailFromContactForm(form) {
    return this.http.post(apiURLContactForm, form,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }
  apiURLReservedHotelMail
  SendReservedMailHotel(data) {
    return this.http.post( apiURLReservedHotelMail,data,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }

  SendReservedMailVehicle(data) {
    return this.http.post( apiURLReservedVehicleMail,data,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }

  SendReservedMailMuseum(data) {
    return this.http.post(apiURLReservedMuseumMail,data,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }
  SendReservedMailRestaurant(data) {
    return this.http.post(apiURLReservedRestaurantMail,data,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }

  SendReservedMailActivity(data) {
    return this.http.post(apiURLReservedActivityMail,data,
      {
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      })
  }

  getHotelReservations(){
    return this.http.get(apiURLHotelReservations, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getHotelsForAdmin(){
    return this.http.get(apiURLgetHotelsForAdmin, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  apiURLgetRooms
  getRooms(){
    return this.http.get(apiURLgetRooms, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getVehicleReservations(){
    return this.http.get(apiURLVehicleReservations, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getOffices(){
    return this.http.get(apiURLgetOffices, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getAdminActivities(){
    return this.http.get(apiURLgetActivities, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getActivitiesReservations(){
    return this.http.get(apiURLActivitiesReservations, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getRestaurantsReservations(){
    return this.http.get(apiURLRestaurantsReservations, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getAdminRestaurants(){
    return this.http.get(apiURLgetAdminRestaurants, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getMuseumsReservations(){
    return this.http.get(apiURLMuseumsReservations, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getAdminMuseums(){
    return this.http.get(apiURLgetAdminMuseums, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}


