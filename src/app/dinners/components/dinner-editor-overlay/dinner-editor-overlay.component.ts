import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../../Models/day';

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

  constructor() {
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
