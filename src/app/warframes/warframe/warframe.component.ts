import { IWarframe, WarframesService, emptyWarframe } from '../warframes.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
    selector: 'app-warframe',
    templateUrl: './warframe.component.html',
    styleUrls: ['./warframe.component.css']
})
export class WarframeComponent implements OnInit {

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

    backToWarframes(): void {
        this.router.navigate([`warframes`]);
    }

}
