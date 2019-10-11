import { NgModule } from '@angular/core';

import { WarframesComponent } from './warframe-list/warframes.component';
import { WarframeComponent } from './warframe/warframe.component';
import { WarframeRoutingModule } from './warframes-routing.module';
import { WarframesService } from './warframes.service';
import { CommonModule } from '@angular/common';
import { WarframeStatsComponent } from './warframe-stats/warframe-stats.component';
import { WarframeDetailsComponent } from './warframe-details/warframe-details.component';
import { FormsModule } from '@angular/forms';
import { WarframeStatService } from './warframe-stats/warframe-stats.service';
import { NgbModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const MatModules = [
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
];

@NgModule ({
    declarations: [
        WarframesComponent,
        WarframeStatsComponent,
        WarframeDetailsComponent,
        WarframeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatModules,
        NgbModule,
        WarframeRoutingModule,
    ],
})
export class WarframesModule {
    static forRoot(): any {
        return {
            ngModule: [
                WarframesModule,
            ],
            providers: [
                NgbProgressbarConfig,
                WarframesService,
                WarframeStatService,
            ],
        };
    }
}
