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
        let id: string | number = this.route.snapshot.paramMap.get('warframeId');

        // tslint:disable-next-line:radix
        id = isNaN(parseInt(id)) ? 0 : parseInt(id);
        if (id) {
            this.warframesService.getById(id)
                .subscribe(
                  (success) => this.warframe = success,
                );
        } else {
            this.warframe = {
                id: 0,
                name: '',
                prime: 0,
                createdAt: new Date(),
                updatedAt: null,
            };
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

    backToDetails(): void {
        this.router.navigateByUrl(`/warframes/${this.warframe.id}`);
    }

    backToWarframes(): void {
        this.router.navigateByUrl(`/warframes`);
    }

}
