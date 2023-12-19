import { Component, OnInit } from '@angular/core';
import { MealServiceService } from '../services/meal-service.service';
import { MealTrackerModel } from '../model/mealmodel';
import { UpdatedMealModel } from '../model/updatedMeal';
import { TotalModel } from '../model/total';
import { MatDialog } from '@angular/material/dialog';
import { AddMealFormComponent } from '../add-meal-form/add-meal-form.component';

@Component({
  selector: 'app-meal-tracker',
  templateUrl: './meal-tracker.component.html',
  styleUrls: ['./meal-tracker.component.css']
})
export class MealTrackerComponent implements OnInit {
 meal: string = 'Nuttela'
 meals: MealTrackerModel[] = []
 updatedMeals: UpdatedMealModel[] = []
 totalsConsuemd: TotalModel
 displayedColumns: string[] = ['Id', 'name', 'calories/100', 'protein/100', 'carbs/100', 'fats/100', 'actions',];
 displayedColumnsUpdate: string[] = ['Updated Id', 'Calories', 'Protein', 'Carbs', 'Fats'];


 constructor(private mealsService: MealServiceService, private dialogRef: MatDialog) {

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
    // this.totalsConsuemd = result.map((element: any) => {
    //   return {
    //     totalCaloriesConsumed: element.totalCaloriesConsumed,
    //     totalProteinConsumed: element.totalProteinConsumed,
    //     totalCarbohydrateConsumed: element.totalCarbohydrateConsumed,
    //     totalFatConsumed: element.totalFatConsumed
    //   }
    this.totalsConsuemd = result;
    console.log(this.totalsConsuemd);
  });
 }

 edit(): void {
  console.log('Edit was clicked');
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
    this.mealsService.getTotals();
  });
}

openDialog(meal?: MealTrackerModel): void {
  console.log('opening dialog');
  const dialogRef = this.dialogRef.open(AddMealFormComponent, {
    width: '500px',
    backdropClass: 'custom-dialog-backdrop-class',
    panelClass: 'custom-dialog-panel-class',
    data: meal
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('close');

    if (result.event === 'submit' && meal) {
      this.mealsService.addMeal(result.data).subscribe();
      location.reload();
    } else if (result.event === 'add' && result.data.quantity !== '') {
      this.mealsService.addMeal(result.data).subscribe();
      location.reload();
    }
  })
}

delete(id: number): void {
  this.mealsService.deleteMeal(id).subscribe();
  location.reload();
}



 }
