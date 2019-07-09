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
    isVisible = false;

    constructor (
        private warframesService: WarframesService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit () {
        const id = +this.route.snapshot.paramMap.getAll('warframeId');

        if (id) {
            this.warframesService.getById(id)
                .subscribe(
                  (success) => this.warframe = success,
                );
        }
    }

    backToWarframes(): void {
        this.router.navigate([`warframes`]);
    }

    toggleHide(): void {
        this.isVisible = !this.isVisible;
    }
}
