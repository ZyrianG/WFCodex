import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },

  ];

  @NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)],
  })
  export class AppRoutingModule {

}
