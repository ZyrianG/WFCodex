import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

@Injectable()
export class WarframesService {

  apiURL = 'http://localhost:5000/warframes';

  constructor(private http: HttpClient) { }

  save(warframe: IWarframe): Observable<IWarframe | number[]> {
    if (warframe.id) {
      return this.update(warframe);
    } else {
      return this.create(warframe);
    }
  }

  update(warframe: IWarframe): Observable<number[]> {
    return this.http.put<number[]>(`${this.apiURL}/${warframe.id}`, warframe);
  }

  create(warframe: IWarframe): Observable<IWarframe> {
    return this.http.post<IWarframe>(`${this.apiURL}`, warframe);
  }

  getAll(): Observable<IWarframe[]> {
    return this.http.get<IWarframe[]>(`${this.apiURL}`);
  }

  getById(id: number): Observable<IWarframe> {
    return this.http.get<IWarframe>(`${this.apiURL}/${id}`);
  }

  delete(warframe: IWarframe): Observable<number[]> {
    return this.http.delete<number[]>(`${this.apiURL}`);
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
