import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WarframeListComponent } from './warframe/warframe-list/warframe-list.component';
import { WeaponsListComponent } from './weapons/weapons-list/weapons-list.component';

import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'warframes', component: WarframeListComponent},
    { path: 'weapons', component: WeaponsListComponent}
  ];

  @NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)],
  })
  export class AppRoutingModule {

}
