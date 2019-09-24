import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WarframeComponent } from './warframe/warframe.component';
import { WarframesComponent } from './warframe-list/warframes.component';
import { WarframeStatsComponent } from './warframe-stats/warframe-stats.component';
import { WarframeDetailsComponent } from './warframe-details/warframe-details.component';
import { HomeComponent } from '../home/home.component';

const warframeRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'warframes', component: WarframesComponent},
    { path: 'warframes/:warframeId', component: WarframeComponent},
    // { path: 'stats', component: WarframeStatsComponent },
    // { path: 'stats/:warframeId', component: WarframeStatsComponent},
    // { path: 'details/:warframeId', component: WarframeDetailsComponent},
];

@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(warframeRoutes)]
})

export class WarframeRoutingModule {

}
