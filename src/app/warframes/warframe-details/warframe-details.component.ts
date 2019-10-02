import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IWarframe, emptyWarframe, WarframesService } from '../warframes.service';

@Component ({
    selector: 'app-warframe-details',
    templateUrl: './warframe-details.component.html',
    styleUrls: ['../../app.component.css'],
})
export class WarframeDetailsComponent implements OnInit {

    warframe: IWarframe;

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
                this.backToWarframes();
            }
        );
    }

    backToStats(): void {
        this.router.navigateByUrl(`/warframes/${this.warframe.id}`);
    }

    backToWarframes(): void {
        this.router.navigate([`warframes`]);
    }

}
