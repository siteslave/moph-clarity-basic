import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { SocketService } from '../../socket.service';

import { Socket } from 'ng-socket-io';

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

  constructor(
    private userService: UserService, 
    private socketService: SocketService,
    private socket: Socket
  ) { }

  ngOnInit() {
    this.socket.emit('welcome', 'สวัสดี')
    this.socket.on('added-user', (data: any) => {
      console.log(data);
      this.getUsers();
    });

    this.socket.on('removed-user', (data: any) => {
      this.getUsers();
    });

    this.socket.on('welcome-callback', (data: any) => {
      console.log('Server send welcome-callback....')
      console.log(data);
    });

    this.socketService.sendWelcome('Hello');

    this.getUsers();
  }

  sendAddUser() {
    this.socket.emit('adduser', 'Hello world!!');
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
