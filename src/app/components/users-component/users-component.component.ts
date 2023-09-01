import { Component } from '@angular/core';
import { User } from './user';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent {
  users: User[] = [];

  constructor(
    private readonly userServiceService: UserServiceService,
  ) {
  }

  getUsers(): void {
    this.userServiceService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
