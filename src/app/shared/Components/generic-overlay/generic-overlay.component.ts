import { Component, OnInit, ContentChild, TemplateRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'generic-overlay',
  templateUrl: './generic-overlay.component.html',
  styleUrls: ['./generic-overlay.component.scss']
})
export class GenericOverlayComponent implements OnInit {

  @ContentChild('body') public bodyTemplate: TemplateRef<any>;
  @Input()
  header: string;
  @Output()
  OverlayClosed: EventEmitter<any>;

  public open: boolean;
  public closing: boolean;

  constructor() {
    this.OverlayClosed = new EventEmitter();
    this.open = true;
    this.closing = false;
   }

  ngOnInit() {
  }

  closeOverlay() {
    this.closing = true;
    setTimeout(() => {

      this.open = false;
      this.OverlayClosed.emit();
    }, 300);

  }

}
