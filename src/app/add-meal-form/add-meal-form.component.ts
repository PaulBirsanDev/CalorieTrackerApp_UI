import { Component, Optional, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MealTrackerModel } from '../model/mealmodel';

@Component({
  selector: 'app-add-meal-form',
  templateUrl: './add-meal-form.component.html',
  styleUrls: ['./add-meal-form.component.css']
})
export class AddMealFormComponent implements OnInit {
  addMealForm = new FormGroup({
    name: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    caloriesPer100gr: new FormControl('', Validators.required),
    proteinPer100gr: new FormControl('', Validators.required),
    carbohydratesPer100gr: new FormControl('', Validators.required),
    fatsPer100gr: new FormControl('', Validators.required)
  });

  currentMeal: MealTrackerModel;

  constructor(public dialogRef: MatDialogRef<AddMealFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.currentMeal = data;
  }

  ngOnInit(): void {
    this.addMealForm.controls.name.setValue(this.currentMeal.name);
    this.addMealForm.controls.quantity.setValue(this.currentMeal.quantity.toString());
    this.addMealForm.controls.caloriesPer100gr.setValue(this.currentMeal.caloriePer100gr.toString());
    this.addMealForm.controls.proteinPer100gr.setValue(this.currentMeal.proteinPer100gr.toString());
    this.addMealForm.controls.carbohydratesPer100gr.setValue(this.currentMeal.carbohydratePer100gr.toString());
    this.addMealForm.controls.fatsPer100gr.setValue(this.currentMeal.fatsPer100gr.toString());
  }

  onSubmit(): void {
    const updateMeal = {
      name: this.addMealForm.controls.name.getRawValue(),
      quantity: this.addMealForm.controls.quantity.getRawValue(),
      capital: this.addMealForm.controls.caloriesPer100gr.getRawValue(),
      continent: this.addMealForm.controls.proteinPer100gr.getRawValue(),
      population: this.addMealForm.controls.carbohydratesPer100gr.getRawValue(),
      area: this.addMealForm.controls.fatsPer100gr.getRawValue()
    }

    if (this.currentMeal) {
      this.dialogRef.close({ event: 'submit', data: { value: updateMeal, isSearch: false } });
    } else {
      this.dialogRef.close({ event: 'add', data: { value: updateMeal, isSearch: false } });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
