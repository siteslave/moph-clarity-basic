import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  fullname: string;

  constructor(private jwtHelper: JwtHelper, private router: Router) { 
    let token = sessionStorage.getItem('token');
    let decodedToken = this.jwtHelper.decodeToken(token);
    this.fullname = decodedToken.fullname;
  }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
