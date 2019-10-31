import { Component, OnInit, ContentChild, TemplateRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'generic-overlay',
  templateUrl: './generic-overlay.component.html',
  styleUrls: ['./generic-overlay.component.scss']
})
export class GenericOverlayComponent implements OnInit {

  @ContentChild('body') public bodyTemplate: TemplateRef<any>;
  public open: boolean;
  @Input()
  header: string;
  @Output()
  OverlayClosed: EventEmitter<any>;

  constructor() {
    this.OverlayClosed = new EventEmitter();
    this.open = true;
   }

  ngOnInit() {
  }

  closeOverlay() {
    this.open = false;
    this.OverlayClosed.emit();
  }

}
