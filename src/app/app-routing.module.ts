import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContaRoutes} from './conta'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/conta/login',
    pathMatch: 'full'
  },
    ...ContaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
