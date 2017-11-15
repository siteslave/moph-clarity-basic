import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  users: any = [];
  loding = false;
  selected = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  async remove(user: any, idx: any) {
    if (confirm('Are you sure? ['+ user.username +']')) {
      let rs = await this.userService.remove(user.user_id);
      if (rs.ok) {
        // this.getUsers();
        this.users.splice(idx, 1);
      }
    }
  }

  async getUsers() {
    this.loding = true;
    let rs = await this.userService.getUsers();
    // console.log(rs);
    this.users = rs.rows;
    this.loding = false;
  }

}
