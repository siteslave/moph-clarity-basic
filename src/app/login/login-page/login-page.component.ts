import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BasicService } from '../../services/basic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {
  username: any;
  password: any;
  isError: boolean = false;
  errorMessage: string;

  constructor(private basicService: BasicService, private router: Router) { }

  ngOnInit() {
  }

  async doLogin() {
    let rs = await this.basicService.doLogin(this.username, this.password);
    if(rs.ok) {
      sessionStorage.setItem('token', rs.token);
      this.router.navigate(['/admin'])
    } else {
      this.isError = true;
      this.errorMessage = rs.error;
    }
  }

}
