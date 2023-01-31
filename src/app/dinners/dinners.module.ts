import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnersRoutingModule } from './dinners-routing.module';
import { DinnersComponent } from './components/dinners/dinners.component';
import { SharedModule } from '../shared/shared.module';
import { DinnerEditorOverlayComponent } from './components/dinner-editor-overlay/dinner-editor-overlay.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DinnersComponent, DinnerEditorOverlayComponent],
  imports: [
    CommonModule,
    DinnersRoutingModule,
    SharedModule,
    MatExpansionModule,
    FormsModule
  ]
})
export class DinnersModule { }
