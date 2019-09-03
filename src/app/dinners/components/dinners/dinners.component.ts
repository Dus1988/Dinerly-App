import { Component, OnInit } from '@angular/core';
import { Week } from '../../Models/week';
import { Meal } from '../../Models/meal';
import { MealTypes } from '../enums/meal-types.enum';

@Component({
  selector: 'app-dinners',
  templateUrl: './dinners.component.html',
  styleUrls: ['./dinners.component.scss']
})
export class DinnersComponent implements OnInit {

  week: Week;
  displayWeek: string;

  constructor() {
    this.week = new Week();
    this.week.days[0].meals.push(...[
      new Meal({description: 'Panda Express', mealType: MealTypes.Lunch}),
      new Meal({description: 'Hot Dogs + Mac & Cheese'}),
    ]);
    this.week.days[1].meals.push(...[
      new Meal({description: 'Chicken + Asparagus + potatoes'}),
    ]);
    this.week.days[2].meals.push(...[
      new Meal({description: 'Tacos'}),
    ]);
    this.displayWeek = `${this.week.startDate.format('MM/DD/YY')} - ${this.week.days[6].date.format('MM/DD/YY')}`;
  }

  ngOnInit() {
  }

}
