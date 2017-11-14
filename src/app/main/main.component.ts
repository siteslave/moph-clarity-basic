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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    this.loding = true;
    let rs = await this.userService.getUsers();
    // console.log(rs);
    this.users = rs.results;
    this.loding = false;
  }

}
