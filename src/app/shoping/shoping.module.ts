import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopingRoutingModule } from './shoping-routing.module';
import { ShopingComponent } from './components/shoping/shoping.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShopingComponent],
  imports: [
    CommonModule,
    ShopingRoutingModule,
    SharedModule
  ]
})
export class ShopingModule { }
