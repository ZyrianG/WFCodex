import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UsersListComponent,
        UserDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UsersRoutingModule,
    ],
})

export class UsersModule {
    static forRoot(): any {
        return {
            NgModule: UsersModule,
            providers: [UsersService],
        };
    }
}
