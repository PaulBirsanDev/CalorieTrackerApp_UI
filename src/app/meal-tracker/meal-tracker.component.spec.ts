import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTrackerComponent } from './meal-tracker.component';

describe('MealTrackerComponent', () => {
  let component: MealTrackerComponent;
  let fixture: ComponentFixture<MealTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealTrackerComponent]
    });
    fixture = TestBed.createComponent(MealTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
