import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const usersRoutes: Routes = [
    { path: 'users', component: UsersListComponent },
    { path: 'users/:userId', component: UserDetailComponent },
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forChild(
            usersRoutes,
        ),
    ],
})

export class UsersRoutingModule {

}
