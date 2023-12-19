import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealTrackerComponent } from './meal-tracker/meal-tracker.component';

const routes: Routes = [
    { path: 'meals', component: MealTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }