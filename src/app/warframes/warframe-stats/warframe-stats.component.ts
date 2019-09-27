import { Component, OnInit, Input } from '@angular/core';

import { IFrameStat, WarframeStatService } from './warframe-stats.service';
import { WarframesService } from '../warframes.service';
import { Subscription } from 'rxjs/Subscription';

@Component ({
    selector: 'app-warframe-stats',
    templateUrl: './warframe-stats.component.html',
})
export class WarframeStatsComponent implements OnInit {
    @Input() warframeId: number;

    statsEntered: boolean;
    stat: IFrameStat;
    editMode: boolean;

    constructor (
        private warframeStatService: WarframeStatService,
        private warframesService: WarframesService,
    ) {}

    ngOnInit(): void {
        console.log(`WarframeID: ${JSON.stringify(this.warframeId)}`);
        // Returns existing frame stats
        if (this.warframeId > 0) {
            this.getStats(this.warframeId);
            console.log(`Outside of subscription: ${JSON.stringify(this.stat)}`);
        }
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

    create(): void {
        const newStat: IFrameStat = {
            mastery: 0,
            health: 0,
            shield: 0,
            armor: 0,
            energy: 0,
            sprintspeed: 1,
            warframeid: this.warframeId,
            createdAt: new Date(),
        };
        this.warframeStatService.create(newStat)
            .subscribe(
                (success) => {
                    this.stat = success,
                    this.toggleEdit();
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
}
