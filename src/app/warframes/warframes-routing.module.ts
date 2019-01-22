import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WarframesComponent } from './warframe-list/warframes.component';

const warframeRoutes: Routes = [
    { path: 'warframes', component: WarframesComponent}
];

@NgModule ({
    exports: [RouterModule],
    imports: [RouterModule.forChild(warframeRoutes)]
})

export class WarframeRoutingModule {

}
