import { Component, OnInit } from '@angular/core';

import { UsersService, IUser, emptyUser } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser;
  editMode: boolean;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('userId');
    if (id > 0) {
      this.usersService.get(id)
        .subscribe(
          (success) => this.user = success
        );
    }

  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  save(): void {
    this.usersService.save(this.user)
      .subscribe(
        (success) => {
          this.toggleEdit();
        }
      );
  }

}
