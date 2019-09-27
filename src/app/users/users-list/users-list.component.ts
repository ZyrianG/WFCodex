import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService, IUser } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any[];

  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getAll()
      .subscribe(
        (success) =>
          this.users = success,
        );
  }

  goToUser(user: IUser): void {
    this.router.navigate([`/users/${user.id}`]);
  }
}
