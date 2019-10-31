import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { GenericOverlayComponent } from './Components/generic-overlay/generic-overlay.component';

@NgModule({
  declarations: [ToolbarComponent, GenericOverlayComponent],
  imports: [
    CommonModule
  ],
  exports: [ToolbarComponent, GenericOverlayComponent],
})
export class SharedModule { }
