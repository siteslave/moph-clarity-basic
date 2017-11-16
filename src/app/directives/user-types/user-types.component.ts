import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../admin/user.service';

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class UserTypesComponent implements OnInit {

  types: any = [];
  userType: any;

  constructor(private userService: UserService) { }

  async ngOnInit() {

    let rs = await this.userService.getUserTypes();
    this.types = rs.rows;

  }

}
