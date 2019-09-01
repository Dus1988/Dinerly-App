import { Component, OnInit } from '@angular/core';
import { Week } from '../../Models/week';

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
    this.displayWeek = `${this.week.startDate.format('MM/DD/YY')} - ${this.week.days[6].date.format('MM/DD/YY')}`;
  }

  ngOnInit() {
  }

}
