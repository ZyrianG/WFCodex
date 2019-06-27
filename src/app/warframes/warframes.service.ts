import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface IWarframe {
  id: number;
  Name: string;
  Prime: number;
  createdAt: Date;
  updatedAt: Date;
}

export const emptyWarframe: IWarframe = {
  id: 0,
  Name: '',
  Prime: 0,
  createdAt: null,
  updatedAt: null,
};

// TODO CCC: hook this up to the backend
@Injectable()
export class WarframesService {

  apiURL = 'https://localhost:5000/warframes';

  items: IWarframe[] = [
    {
      id: 1,
      Name: 'Ash',
      Prime: 1,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 2,
      Name: 'Atlas',
      Prime: 0,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 3,
      Name: 'Banshee',
      Prime: 1,
      createdAt: new Date(),
      updatedAt: null,
    },
  ];

  constructor(private http: HttpClient) { }

  get(query: string): Observable<HttpResponse<IWarframe[]>> {
    query = query.toLowerCase();
    const filteredItems = this.items.filter((item) => {
      return item.Name.toLowerCase().includes(query);
    });
    const answer = new HttpResponse({
      body: [...filteredItems],
    });
    return Observable.of(answer);
  }

  getById(id: number): Observable<IWarframe> {
    const answer = this.items.find((item) => item.id === id);
    return Observable.of({...answer});
  }

  save(warframe: IWarframe): Observable<IWarframe | number[]> {
    if (warframe.id) {
      return this.http.put<number[]>(`${this.apiURL}`, warframe);
      // return this.update(warframe);
    } else {
      return this.http.post<number[]>(`${this.apiURL}`, warframe);
      // return this.create(warframe);
    }
  }

  private update(warframe: IWarframe): Observable<number> {
    const warframeToUpdate = this.items.find((item) => item.id === warframe.id);
    warframeToUpdate.Name = warframe.Name;
    return Observable.of(warframe.id);
  }

  private create(warframe: IWarframe): Observable<number> {
    const warframeIds = this.items.map((item) => item.id);
    const nextwarframeId = Math.max(...warframeIds) + 1;
    warframe.id = nextwarframeId;
    this.items.push(warframe);
    return Observable.of(warframe.id);
  }

}
