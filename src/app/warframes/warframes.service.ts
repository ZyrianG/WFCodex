import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface IWarframe {
  id: number;
  name: string;
  prime: number;
  createdAt: Date;
  updatedAt: Date;
}

export const emptyWarframe: IWarframe = {
  id: 0,
  name: '',
  prime: 0,
  createdAt: null,
  updatedAt: null,
};

// TODO CCC: hook this up to the backend
@Injectable()
export class WarframesService {

  apiURL = 'http://localhost:5000/warframes';

  // items: IWarframe[] = [
  //   {
  //     id: 1,
  //     name: 'Ash',
  //     prime: 1,
  //     createdAt: new Date(),
  //     updatedAt: null,
  //   },
  //   {
  //     id: 2,
  //     name: 'Atlas',
  //     prime: 0,
  //     createdAt: new Date(),
  //     updatedAt: null,
  //   },
  //   {
  //     id: 3,
  //     name: 'Banshee',
  //     prime: 1,
  //     createdAt: new Date(),
  //     updatedAt: null,
  //   },
  // ];

  constructor(private http: HttpClient) { }

  save(warframe: IWarframe): Observable<IWarframe> {
    if (warframe.id) {
      return this.update(warframe);
    } else {
      return this.create(warframe);
    }
  }

  update(warframe: IWarframe): Observable<IWarframe> {
    return this.http.put<IWarframe>(`${this.apiURL}/${warframe.id}`, warframe);
  }

  create(warframe: IWarframe): Observable<IWarframe> {
    return this.http.post<IWarframe>(`${this.apiURL}`, warframe);
  }

  getAll(): Observable<IWarframe[]> {
    return this.http.get<IWarframe[]>(`${this.apiURL}`);
  }

  getById(id: number): Observable<IWarframe> {
    return this.http.get<IWarframe>(`${this.apiURL}/${id}`);
    // const answer = this.items.find((item) => item.id === id);
    // return Observable.of({...answer});
  }

  delete(id: number): Observable<IWarframe> {
    return this.http.delete<IWarframe>(`${this.apiURL}/${id}/edit`);
  }

  // get(query: string): Observable<HttpResponse<IWarframe[]>> {
  //   query = query.toLowerCase();
  //   const filteredItems = this.items.filter((item) => {
  //     return item.name.toLowerCase().includes(query);
  //   });
  //   const answer = new HttpResponse({
  //     body: [...filteredItems],
  //   });
  //   return Observable.of(answer);
  // }

  // pullData(warframes: IWarframe[]) {
  //   return this.http.put(`${this.apiURL}`, warframes)
  //   .subscribe(response => {
  //     console.log(response);
  //   });
  // }

  // private update(warframe: IWarframe): Observable<number> {
  //   const warframeToUpdate = this.items.find((item) => item.id === warframe.id);
  //   warframeToUpdate.Name = warframe.Name;
  //   return Observable.of(warframe.id);
  // }

  // private create(warframe: IWarframe): Observable<number> {
  //   const warframeIds = this.items.map((item) => item.id);
  //   const nextwarframeId = Math.max(...warframeIds) + 1;
  //   warframe.id = nextwarframeId;
  //   this.items.push(warframe);
  //   return Observable.of(warframe.id);
  // }

}
