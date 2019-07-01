import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IWarframe, emptyWarframe, WarframesService } from '../warframes.service';

@Component ({
    selector: 'app-warframe-edit',
    templateUrl: './warframe-edit.component.html',
    styleUrls: ['./warframe-edit.component.css']
})
export class WarframeEditComponent implements OnInit {

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
                this.backToDetails();
            }
        );
    }

    backToDetails(): void {
        this.router.navigateByUrl(`/warframes/${this.warframe.id}`);
    }

}
