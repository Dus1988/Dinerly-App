import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../../Models/day';

@Component({
  selector: 'dinner-editor-overlay',
  templateUrl: './dinner-editor-overlay.component.html',
  styleUrls: ['./dinner-editor-overlay.component.scss']
})
export class DinnerEditorOverlayComponent implements OnInit {

  @Input()
  Day: Day;
  @Output()
  OverlayClosed: EventEmitter<any>;

  constructor() {
    this.OverlayClosed = new EventEmitter();
  }

  ngOnInit() {
  }

  close() {
    this.OverlayClosed.emit();
  }

}
