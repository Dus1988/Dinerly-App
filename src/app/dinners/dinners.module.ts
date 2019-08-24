import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinnersRoutingModule } from './dinners-routing.module';
import { DinnersComponent } from './components/dinners/dinners.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DinnersComponent],
  imports: [
    CommonModule,
    DinnersRoutingModule,
    SharedModule,
  ]
})
export class DinnersModule { }
