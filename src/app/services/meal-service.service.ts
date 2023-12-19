import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  constructor(private httpClient: HttpClient) {
  }
    getAll(): Observable<any> {
       return this.httpClient.get("http://localhost:8080/meal");
    }

    getAllUpdatedMeals(): Observable<any> {
      return this.httpClient.get("http://localhost:8080/updatedMeals");
   }

   getTotals(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/meal/total");
 }

   
}


