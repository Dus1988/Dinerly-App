import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../../Models/day';
import { IToolbarAction } from 'src/app/shared/Components/toolbar/models/itoolbar-action';
import { MealTypes } from '../enums/meal-types.enum';

@Component({
  selector: 'dinner-editor-overlay',
  templateUrl: './dinner-editor-overlay.component.html',
  styleUrls: ['./dinner-editor-overlay.component.scss']
})
export class DinnerEditorOverlayComponent implements OnInit {

  @Input()
  public Day: Day;
  @Output()
  public OverlayClosed: EventEmitter<any>;

  public headerContent: string;
  public actions: Array<IToolbarAction>;

  _MealTypes = MealTypes;

  constructor() {
    this.actions = [
      {
        ActionName: 'Add Meal',
        ActionIcon: 'fas fa-plus-circle fa-lg mb-3'
      },
      {
        ActionName: "Reset Day's meals",
        ActionIcon: 'fas fa-trash -fa-lg mb-3'
      }
    ];
    this.OverlayClosed = new EventEmitter();
  }

  ngOnInit() {
    // debugger;
    this.headerContent = this.Day.date.format('ddd | MM-DD-YYYY');
  }

  close() {
    this.OverlayClosed.emit();
  }

}
