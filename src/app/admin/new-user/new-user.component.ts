import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  userId: any;

  types: any = [];

  errorMessage: string;
  isError: boolean = false;
  saving: boolean = false;

  constructor(
    private userService: UserService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userId = this.route.snapshot.params.userId;
   }

  async ngOnInit() {

    if (this.userId) {
      let rs = await this.userService.getUserDetail(this.userId);
      this.username = rs.rows.username;
      this.firstName = rs.rows.first_name;
      this.lastName = rs.rows.last_name;
      this.userType = rs.rows.user_type_id;
      this.isActive = rs.rows.is_active === 'Y' ? true : false;
    }

  }

  async save() {
    this.saving = true;
    try {
    const isActive = this.isActive ? 'Y' : 'N';
    let rs = null;

    if (this.userId) {
      rs = await this.userService.update(
        this.userId, 
        this.password, 
        this.firstName, 
        this.lastName, 
        this.userType, 
        isActive);
    } else {
      rs = await this.userService.save(
        this.username, 
        this.password, 
        this.firstName, 
        this.lastName, 
        this.userType, 
        isActive);
    }

    if (rs.ok) {
      this.router.navigate(['/admin']);
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
