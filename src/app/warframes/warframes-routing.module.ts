import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WarframesComponent } from './warframe-list/warframes.component';
import { WarframeStatsComponent } from './warframe-stats/warframe-stats.component';
import { WarframeEditComponent } from './warframe-edit/warframe-edit.component';

const warframeRoutes: Routes = [
    { path: 'warframes', component: WarframesComponent},
    { path: 'warframes/:warframeId', component: WarframeStatsComponent},
    { path: 'warframes/:warframeId/edit', component: WarframeEditComponent},
];

@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(warframeRoutes)]
})

export class WarframeRoutingModule {

}
