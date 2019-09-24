import { Component, OnInit, Input } from '@angular/core';

import { IFrameStat, emptyStat, WarframeStatService } from './warframe-stats.service';
import { WarframesService } from '../warframes.service';
import { Subscription } from 'rxjs/Subscription';

@Component ({
    selector: 'app-warframe-stats',
    templateUrl: './warframe-stats.component.html',
})
export class WarframeStatsComponent implements OnInit {
    @Input() warframeId: number;

    statsEntered: boolean;
    stat: IFrameStat = {...emptyStat};
    editMode: boolean;

    constructor (
        private warframeStatService: WarframeStatService,
        private warframesService: WarframesService,
    ) {}

    ngOnInit(): void {
        console.log(`WarframeID: ${JSON.stringify(this.warframeId)}`);

        // Returns existing frame stats
        if (this.statsExists(this.warframeId)) {
            this.getStats(this.warframeId);
            console.log(`Outside of subscription: ${JSON.stringify(this.stat)}`);
        } else {
            console.log(`Stats don't exist`);
        }

        console.log(this.statsExists(this.warframeId));

    }

    save(): void {
        this.warframeStatService.save(this.stat)
        .subscribe(
            (success) => {
                this.toggleEdit(),
                console.log(`OnSave: ${JSON.stringify(this.stat)}`);
            }
        );
    }

    getStats(id: number): Subscription {
        return this.warframeStatService.get(id)
            .subscribe(
                success => {
                    this.stat = success,
                    console.log(`Stats Exist: ${JSON.stringify(this.stat)}`);
                }
            );
    }

    toggleEdit(): void {
        this.editMode = !this.editMode;
    }

    toggleStatsEntered(): void {
        this.statsEntered = !this.statsEntered;
    }

    statsExists(id: number): boolean {
        const tempStat = this.warframeStatService.get(id).subscribe();

        if (tempStat) {
            return true;
        } else {
            return false;
        }
    }
}
