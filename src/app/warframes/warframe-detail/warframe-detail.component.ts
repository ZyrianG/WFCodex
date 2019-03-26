import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IWarframe, emptyWarframe, WarframesService } from '../warframes.service';

@Component ({
    selector: 'app-warframe-detail',
    templateUrl: './warframe-detail.component.html',
    styleUrls: ['./warframe-detail.component.css']
})
export class WarframeDetailsComponent implements OnInit {

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

}
