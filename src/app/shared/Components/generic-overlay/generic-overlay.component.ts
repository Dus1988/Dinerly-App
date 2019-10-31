import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'generic-overlay',
  templateUrl: './generic-overlay.component.html',
  styleUrls: ['./generic-overlay.component.scss']
})
export class GenericOverlayComponent implements OnInit {

  @ContentChild('body') public bodyTemplate: TemplateRef<any>;
  public open: boolean;

  constructor() {
    this.open = true;
   }

  ngOnInit() {
  }

  closeOverlay() {
    this.open = false;
  }

}
