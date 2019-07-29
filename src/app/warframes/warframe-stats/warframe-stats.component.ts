import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IFrameStat, emptyStat, WarframeStatService } from './warframe-stats.service';

@Component ({
    selector: 'app-warframe-stats',
    templateUrl: './warframe-stats.component.html',
})
export class WarframeStatsComponent implements OnInit {

    stat: IFrameStat;
    isVisible = false;

    constructor (
        private warframeStatService: WarframeStatService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        let id: string | number = this.route.snapshot.paramMap.get('warframeId');

        // tslint:disable-next-line:radix
        id = isNaN(parseInt(id)) ? 0 : parseInt(id);
        if (id) {
            this.warframeStatService.get(id)
                .subscribe(
                  (success) => this.stat = success,
                );
        } else {
            this.stat = emptyStat;
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
        this.warframeStatService.save(this.stat)
        .subscribe(
            (success) => {
                this.backToWarframes();
            }
        );
    }

    backToWarframes(): void {
        this.router.navigate([`warframes`]);
    }

    toggleEdit(): void {
        this.isVisible = !this.isVisible;
    }

}
