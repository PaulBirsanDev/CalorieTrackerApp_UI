import { Component, OnInit } from '@angular/core';
import { MealServiceService } from '../services/meal-service.service';
import { MealTrackerModel } from '../model/mealmodel';
import { UpdatedMealModel } from '../model/updatedMeal';
import { TotalModel } from '../model/total';

@Component({
  selector: 'app-meal-tracker',
  templateUrl: './meal-tracker.component.html',
  styleUrls: ['./meal-tracker.component.css']
})
export class MealTrackerComponent implements OnInit {
 meal: string = 'Nuttela'
 meals: MealTrackerModel[] = []
 updatedMeals: UpdatedMealModel[] = []
 totalsConsuemd: TotalModel[] = []


 constructor(private mealsService: MealServiceService) {

 }

 ngOnInit(): void {
  this.mealsService.getAll().subscribe(result => {
    this.meals = result.map((element: any) => {
      return {
      id: element.id,
      name: element.name,
      quantity: element.quantity,
      caloriePer100gr: element.caloriePer100gr,
      proteinPer100gr: element.proteinPer100gr,
      carbohydratePer100gr: element.carbohydratePer100gr,
      fatsPer100gr:element.fatsPer100gr
      }
      
    })
    console.log(this.meals);
  });



  this.mealsService.getTotals().subscribe(result => {
    this.totalsConsuemd = result.map((element: any) => {
      return {
        totalCaloriesConsumed: element.totalCaloriesConsumed,
        totalProteinConsumed: element.totalProteinConsumed,
        totalCarbohydrateConsumed: element.totalCarbohydrateConsumed,
        totalFatConsumed: element.totalFatConsumed
      }
      
    })
    console.log(this.totalsConsuemd);
  });
 }

 edit(): void {
  console.log('Edit was clicked');
}

delete(): void {
  console.log('Delete was clicked');
}

calculateUpdetedMeals() {
  this.mealsService.getAllUpdatedMeals().subscribe(result => {
    this.updatedMeals = result.map((element: any) => {
      return {
        mealId: element.mealID,
        totalCaloriesConsumed: element.totalCaloriesConsumed,
        totalProteinConsumed: element.totalProteinConsumed,
        totalCarbohydrateConsumed: element.totalCarbohydrateConsumed,
        totalFatConsumed: element.totalFatConsumed
      }
      
    })
    console.log(this.updatedMeals);
  });
}



 }
