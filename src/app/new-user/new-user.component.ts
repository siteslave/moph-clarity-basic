import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NewUserComponent implements OnInit {

  username: any;
  password: any;
  firstName: any;
  lastName: any;
  isActive: boolean = true;
  userType: any;

  errorMessage: string;
  isError: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  async save() {
    const isActive = this.isActive ? 'Y' : 'N';
    let rs = await this.userService.save(
      this.username, 
      this.password, 
      this.firstName, 
      this.lastName, 
      this.userType, 
      isActive);

    if (rs.ok) {
      this.router.navigate(['/']);
    } else {
      this.isError = true;
      this.errorMessage = rs.error;
    }
  }

}
