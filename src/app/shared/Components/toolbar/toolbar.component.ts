import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IToolbarAction } from './models/itoolbar-action';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  actions: Array<IToolbarAction>;
  @Input()
  title: string;

  @Output()
  ActionClicked: EventEmitter<IToolbarAction>;

  constructor() {
    this.ActionClicked = new EventEmitter();
   }

  ngOnInit() {
  }

  clickAction(action: IToolbarAction) {
    this.ActionClicked.emit(action);
  }

}
