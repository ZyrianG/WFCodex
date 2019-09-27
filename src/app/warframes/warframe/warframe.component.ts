import { IWarframe, WarframesService, emptyWarframe } from '../warframes.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
    selector: 'app-warframe',
    templateUrl: './warframe.component.html',
    styleUrls: ['./warframe.component.css']
})
export class WarframeComponent implements OnInit {

    warframe: IWarframe = {...emptyWarframe};
    editMode: boolean;

    constructor (
        private warframesService: WarframesService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        const id: number = +this.route.snapshot.paramMap.get('warframeId');
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

    create(): void {
        this.warframesService.save(this.warframe)
        .subscribe(
            (success) => {
                this.backToWarframes();
            }
        );
    }

    update(): void {
        this.warframesService.save(this.warframe)
        .subscribe(
            (success) => {
                this.toggleEdit();
            }
        );
    }

    toggleEdit(): void {
        this.editMode = !this.editMode;
    }

}
