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
        private waframesService: WarframesService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.getWarframes();
    }

    getWarframes(query = ''): void {
        this.waframesService.get(query).subscribe(
            (answer) => {
                this.warframes = answer.body;
            },
        );
    }

    goToWarframe(warframe: IWarframe): void {
        this.router.navigateByUrl(`/warframes/${warframe.id}`);
    }
}
