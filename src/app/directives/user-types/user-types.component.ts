import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../admin/user.service';

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class UserTypesComponent implements OnInit {
  @Input() selectedId: any;
  @Output() onSelected: EventEmitter<any> = new EventEmitter();

  types: any = [];
  userType: any;

  constructor(private userService: UserService) { }

  async ngOnInit() {

    let rs = await this.userService.getUserTypes();
    this.types = rs.rows;

    if (this.selectedId) {
      this.userType = this.selectedId;
    }

  }

  onChange(event) {
    this.onSelected.emit(this.userType);
  }

}
