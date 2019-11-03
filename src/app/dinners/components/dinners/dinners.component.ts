import { Component, OnInit } from '@angular/core';
import { Week } from '../../Models/week';
import { Meal } from '../../Models/meal';
import { MealTypes } from '../enums/meal-types.enum';
import { Day } from '../../Models/day';
import { IToolbarAction } from 'src/app/shared/Components/toolbar/models/itoolbar-action';

@Component({
  selector: 'app-dinners',
  templateUrl: './dinners.component.html',
  styleUrls: ['./dinners.component.scss']
})
export class DinnersComponent implements OnInit {

  week: Week;
  weekModifier;
  displayWeek: string;
  activeDay: Day;

  actions: Array<IToolbarAction>;

  constructor() {
    this.actions = [
      {
        ActionName: 'Previous Week',
        ActionIcon: 'fas fa-chevron-left',
      },
      {
        ActionName: 'Next Week',
        ActionIcon: 'fas fa-chevron-right'
      }
    ];
    this.weekModifier = 0;
    this.week = new Week();
    this.week.days[0].meals.push(...[
      new Meal({description: 'Red Baron Pizza', mealType: MealTypes.Dinner}),
    ]);
    this.week.days[1].meals.push(...[
      new Meal({description: 'Chicken + Asparagus + Potatoes', mealType: MealTypes.Dinner}),
    ]);
    this.week.days[2].meals.push(...[
      new Meal({description: 'Hot Dogs & Mac', mealType: MealTypes.Dinner}),
    ]);
    this.week.days[3].meals.push(...[
      new Meal({description: 'Pot Pies', mealType: MealTypes.Dinner}),
    ]);
    this.week.days[4].meals.push(...[
      new Meal({description: 'Meat Loaf, Mashed Potatoes and Carrots', mealType: MealTypes.Dinner}),
    ]);
    this.week.days[5].meals.push(...[
      new Meal({description: 'D&D (Pizza?)', mealType: MealTypes.Dinner}),
    ]);
    this.week.days[6].meals.push(...[
      new Meal({description: '????', mealType: MealTypes.Dinner}),
    ]);
    this.displayWeek = `${this.week.startDate.format('MM/DD/YY')} - ${this.week.days[6].date.format('MM/DD/YY')}`;
  }

  editDay(day: Day) {
    this.activeDay = day;
  }

  ngOnInit() {
  }

}
