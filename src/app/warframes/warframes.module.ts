import { NgModule } from '@angular/core';

import { WarframesComponent } from './warframe-list/warframes.component';
import { WarframeRoutingModule } from './warframes-routing.module';
import { WarframesService } from './warframes.service';
import { CommonModule } from '@angular/common';
import { WarframeDetailsComponent } from './warframe-detail/warframe-detail.component';

@NgModule ({
    declarations: [
        WarframesComponent,
        WarframeDetailsComponent,
    ],
    imports: [
        CommonModule,
        WarframeRoutingModule,
    ],
})
export class WarframesModule {
    static forRoot(): any {
        return {
            ngModule: WarframesModule,
            providers: [WarframesService],
        };
    }
}
