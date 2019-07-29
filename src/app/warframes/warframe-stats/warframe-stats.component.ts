import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IWarframe, emptyWarframe, WarframesService } from '../warframes.service';

@Component ({
    selector: 'app-warframe-stats',
    templateUrl: './warframe-stats.component.html',
    styleUrls: ['./warframe-stats.component.css']
})
export class WarframeStatsComponent implements OnInit {

    warframe: IWarframe;
    isVisible = false;

    constructor (
        private warframesService: WarframesService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        let id: string | number = this.route.snapshot.paramMap.get('warframeId');

        // tslint:disable-next-line:radix
        id = isNaN(parseInt(id)) ? 0 : parseInt(id);
        if (id) {
            this.warframesService.getById(id)
                .subscribe(
                  (success) => this.warframe = success,
                );
        } else {
            this.warframe = emptyWarframe;
        }
    }

    save(): void {
        this.warframesService.save(this.warframe)
        .subscribe(
            (success) => {
                this.toggleEdit();
            }
        );
    }

    create(): void {
        this.warframesService.save(this.warframe)
        .subscribe(
            (success) => {
                this.backToWarframes();
            }
        );
    }

    backToWarframes(): void {
        this.router.navigate([`warframes`]);
    }

    delete(): void {
        this.warframesService.delete(this.warframe)
        .subscribe(
            (success) => {
                this.backToWarframes();
            }
        );
    }

    toggleEdit(): void {
        this.isVisible = !this.isVisible;
    }

}
