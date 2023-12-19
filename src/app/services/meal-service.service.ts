import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MealTrackerModel } from '../model/mealmodel';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {
  url = 'http://localhost:8080/meal';

  constructor(private httpClient: HttpClient) {
  }
    getAll(): Observable<any> {
       return this.httpClient.get("http://localhost:8080/meal");
    }

    getAllUpdatedMeals(): Observable<any> {
      return this.httpClient.get("http://localhost:8080/meal/updatedMeals");
   }

   getTotals(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/meal/total");
 }

 addMeal(meal: MealTrackerModel): Observable<any> {
  return this.httpClient.post(this.url, meal);
}

deleteMeal(id: number): Observable<any> {
  return this.httpClient.delete(this.url + '/' + id);
}

   
}


