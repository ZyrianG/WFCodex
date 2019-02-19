import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component ({
    selector: 'app-warframe',
    templateUrl: './warframes.component.html',
    styleUrls: ['./warframes.component.css']
})
export class WarframesComponent implements OnInit {

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
    }

}
