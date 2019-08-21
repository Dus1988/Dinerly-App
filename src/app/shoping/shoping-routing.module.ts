import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingComponent } from './components/shoping/shoping.component';

const routes: Routes = [
  {
    path: '',
    component: ShopingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ShopingRoutingModule { }
