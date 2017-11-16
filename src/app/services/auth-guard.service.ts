import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuardService {

  constructor(private router: Router, private jwtHelper: JwtHelper) { }

  canActivate() {
    if (sessionStorage.getItem('token')) {
      console.log(this.jwtHelper.isTokenExpired(sessionStorage.getItem('token')));
      console.log(this.jwtHelper.decodeToken(sessionStorage.getItem('token')));
      // console.log()
      if(this.jwtHelper.isTokenExpired(sessionStorage.getItem('token'))) {
        this.router.navigate(['/login']);
        return false;        
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
