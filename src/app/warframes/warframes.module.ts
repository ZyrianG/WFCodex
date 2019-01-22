import { NgModule } from '@angular/core';
import { WarframesComponent } from './warframe-list/warframes.component';
import { WarframeRoutingModule } from './warframes-routing.module';

@NgModule ({
    declarations: [
        WarframesComponent,
    ],
    imports: [
        WarframeRoutingModule,
    ],
})
export class WarframesModule {

}
