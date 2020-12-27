import { Injectable } from '@angular/core';
import {Observable, of, throwError } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {catchError, tap,map} from 'rxjs/operators';
const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl="http://localhost:8080/Hotels";
const apiUrlActivities="http://localhost:8080/activities";
const apiURLActivitySearch="http://localhost:8080/activities/search"
const apiURLHotelsName="http://localhost:8080/Hotels/names"
const apiURLCarsOffice="http://localhost:8080/RentCarsOffice"
const apiUrlcarsSearch="http://localhost:8080/RentCarsOffice/OnlyCities"
const apiURLvehicle="http://localhost:8080/GetAllCars"
const apiURLCarcategories="http://localhost:8080/CarCategories"
const apiURLAllMuseums="http://localhost:8080/AllMuseums"
const apiURLCitiesOfMuseums="http://localhost:8080/CitiesOfmuseums"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient ) { }

  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occured:',error.error.message);

    }else{
      console.error(
        `Backend returned code ${error.status}, `+
        `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
  private extractData(res: Response){
    let body=res;
    return body ||{};
  }
  getAllHotels():Observable<any>{
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getActivities(){
    return this.http.get(apiUrlActivities, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }  
  
  getActivitiesCity(){
    return this.http.get(apiURLActivitySearch, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getHotelsCity(){
    return this.http.get(apiURLHotelsName, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getAllCarRentalOffice(){
    return this.http.get(apiURLCarsOffice, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCitiesOfCarOffice(){
    return this.http.get(apiUrlcarsSearch,httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );

  }

  getAllVehicles(){
    return this.http.get(apiURLvehicle,httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCarCategories(){
    return this.http.get(apiURLCarcategories,httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getAllMuseums(){
    return this.http.get(apiURLAllMuseums,httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCitiesOfMuseums(){
    return this.http.get(apiURLCitiesOfMuseums,httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

}

