import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { GenericOverlayComponent } from './Components/generic-overlay/generic-overlay.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [ToolbarComponent, GenericOverlayComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  exports: [ToolbarComponent, GenericOverlayComponent],
})
export class SharedModule { }
