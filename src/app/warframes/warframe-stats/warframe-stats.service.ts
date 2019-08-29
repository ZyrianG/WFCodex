import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { WarframesService, IWarframe } from '../warframes.service';

export interface IFrameStat {
    id: number;
    mastery: number;
    health: number;
    shield: number;
    armor: number;
    energy: number;
    sprintspeed: number;
    warframeid: number;
    createdAt: Date;
    updatedAt: Date;
}

export const emptyStat: IFrameStat = {
    id: 0,
    mastery: 0,
    health: 0,
    shield: 0,
    armor: 0,
    energy: 0,
    sprintspeed: 0,
    warframeid: 0,
    createdAt: null,
    updatedAt: null,
};

@Injectable()
export class WarframeStatService {

    statURL = 'http://localhost:5000/stats';

    constructor(private http: HttpClient) {}

    save(stat: IFrameStat): Observable<IFrameStat | number[]> {
        if (stat.warframeid) {
            return this.update(stat);
        } else {
            return this.create(stat);
        }
    }

    update(stat: IFrameStat): Observable<number[]> {
        return this.http.put<number[]>(`${this.statURL}/${stat.warframeid}`, stat);
    }

    create(stat: IFrameStat): Observable<IFrameStat> {
        return this.http.post<IFrameStat>(`${this.statURL}`, stat);
    }

    get(id: number): Observable<IFrameStat> {
        return this.http.get<IFrameStat>(`${this.statURL}/${id}`);
    }

    getAll(): Observable<IFrameStat[]> {
        return this.http.get<IFrameStat[]>(`${this.statURL}`);
    }

}
