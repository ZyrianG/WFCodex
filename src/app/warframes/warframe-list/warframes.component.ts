import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WarframesService, IWarframe } from '../warframes.service';

@Component ({
    selector: 'app-warframe',
    templateUrl: './warframes.component.html',
    styleUrls: ['./warframes.component.css']
})
export class WarframesComponent implements OnInit {

    warframes: any[];

    constructor(
        private warframesService: WarframesService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.getWarframes();
    }

    getWarframes(): void {
        this.warframesService.getAll().subscribe(
            (answer) => {
                this.warframes = answer;
            },
        );
    }

    goToWarframe(warframe: IWarframe): void {
        this.router.navigateByUrl(`/warframes/${warframe.id}`);
    }

    goToAdd(): void {
        this.router.navigateByUrl(`/warframes/0/edit`);
    }

    // goSyncData(): void {
    //     this.warframesService.pullData(this.warframes);
    // }
}
