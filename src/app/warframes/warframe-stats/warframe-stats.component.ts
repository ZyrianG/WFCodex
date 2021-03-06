import { Component, OnInit, Input } from '@angular/core';

import { IFrameStat, WarframeStatService } from './warframe-stats.service';
import { WarframesService } from '../warframes.service';
import { Subscription } from 'rxjs/Subscription';

@Component ({
    selector: 'app-warframe-stats',
    templateUrl: './warframe-stats.component.html',
    styleUrls: [
        '../../app.component.css',
        './warframe-stats.component.css'
],

})
export class WarframeStatsComponent implements OnInit {
    @Input() warframeId: number;

    statsEntered: boolean;
    stat: IFrameStat;
    editMode: boolean;
    rank: number = 0;
    health: number;
    shield: number;
    energy: number;


    constructor (
        private warframeStatService: WarframeStatService,
        private warframesService: WarframesService,
    ) {}

    ngOnInit(): void {
        // console.log(`WarframeID: ${JSON.stringify(this.warframeId)}`);
        // Returns existing frame stats
        if (this.warframeId > 0) {
            this.getStats(this.warframeId);
            // console.log(`Outside of subscription: ${JSON.stringify(this.stat)}`);
        }
    }

    save(): void {
        this.warframeStatService.save(this.stat)
        .subscribe(
            (success) => {
                this.toggleEdit();
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
                    this.stat = success;                
                }
            );
    }

    toggleEdit(): void {
        this.editMode = !this.editMode;
    }

    toggleStatsEntered(): void {
        this.statsEntered = !this.statsEntered;
    }

    updatedStat(stat, rank): void {
        if (rank%3 === 0) {
            this.health = stat + (stat * 0.2) * rank;
            this.shield = stat + (stat * 0.2) * rank;
            this.energy = stat + (stat * 0.05) * rank;
        }
    }
}
