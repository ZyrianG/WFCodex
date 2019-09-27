import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

export interface IUser {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  password: string;
}

export const emptyUser: IUser = {
  id: 0,
  username: '',
  email: '',
  isAdmin: false,
  password: ''
};

@Injectable()
export class UsersService {

  usersUrl = `http://localhost:5000/users`;

  constructor(private http: HttpClient) { }

  create(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.usersUrl}`, user);
  }

  update(user: IUser): Observable<number[]> {
    return this.http.put<number[]>(`${this.usersUrl}/${user.id}`, user);
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.usersUrl}`);
  }

  get(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.usersUrl}/${id}`);
  }

}
