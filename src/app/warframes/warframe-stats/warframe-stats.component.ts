import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IWarframe, emptyWarframe, WarframesService } from '../warframes.service';

@Component ({
    selector: 'app-warframe-stats',
    templateUrl: './warframe-stats.component.html',
    styleUrls: ['./warframe-stats.component.css']
})
export class WarframeStatsComponent implements OnInit {

    warframe: IWarframe = {...emptyWarframe};

    constructor (
        private warframesService: WarframesService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('warframeId');

        if (id) {
            this.warframesService.getById(id)
                .subscribe(
                  (success) => this.warframe = success,
                );
        }
    }

    save(): void {
        this.warframesService.save(this.warframe)
        .subscribe(
            (success) => {
                this.backToWarframes();
            }
        );
    }

    backToWarframes(): void {
        this.router.navigateByUrl(`/warframes`);
    }

    goToAdd(): void {
        this.router.navigateByUrl(`/warframes/${this.warframe.id}/edit`);
    }
}
