import { NgModule } from '@angular/core';

import { WarframesComponent } from './warframe-list/warframes.component';
import { WarframeRoutingModule } from './warframes-routing.module';
import { WarframesService } from './warframes.service';
import { CommonModule } from '@angular/common';
import { WarframeStatsComponent } from './warframe-stats/warframe-stats.component';
import { WarframeEditComponent } from './warframe-edit/warframe-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule ({
    declarations: [
        WarframesComponent,
        WarframeStatsComponent,
        WarframeEditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
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
