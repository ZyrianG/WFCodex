import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { NgModule } from '@angular/core';
import { WarframesComponent } from './warframes/warframe-list/warframes.component';
import { WarframeDetailsComponent } from './warframes/warframe-detail/warframe-detail.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'warframes', component: WarframesComponent },
    { path: 'warframes/:warframeId', component: WarframeDetailsComponent },
  ];

  @NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)],
  })
  export class AppRoutingModule {

}
