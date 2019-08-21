import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnersRoutingModule } from './dinners-routing.module';
import { DinnersComponent } from './components/dinners/dinners.component';

@NgModule({
  declarations: [DinnersComponent],
  imports: [
    CommonModule,
    DinnersRoutingModule
  ]
})
export class DinnersModule { }
