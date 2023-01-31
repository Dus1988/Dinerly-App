import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: '../app/home/home.module#HomeModule',
    redirectTo: '/dinners',
    pathMatch: 'full',
  },
  {
    path: 'dinners',
    loadChildren: '../app/dinners/dinners.module#DinnersModule',
  },
  {
    path: 'shopping',
    loadChildren: '../app/shoping/shoping.module#ShopingModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
