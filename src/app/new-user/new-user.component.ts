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
  saving: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  async save() {
    this.saving = true;
    try {
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
      this.saving = false;
      this.isError = true;
      this.errorMessage = rs.error;
    }
    } catch (error) {
      console.log(error);
      this.isError = true;
      if (error.status === 0) {
        this.errorMessage = 'ไม่สามารถเชื่อมต่อกับ Server ได้';
      } else {
        this.errorMessage = 'Server error: codt=' + error.status;
      }
      this.saving = false;
    }
  }

}
