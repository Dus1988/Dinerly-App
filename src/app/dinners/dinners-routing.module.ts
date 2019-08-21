import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinnersComponent } from './components/dinners/dinners.component';

const routes: Routes = [
  {
    path: '',
    component: DinnersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DinnersRoutingModule { }
