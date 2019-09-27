import { Component, OnInit } from '@angular/core';

import { UsersService, IUser, emptyUser } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser = {...emptyUser};
  editMode: boolean;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }


}
