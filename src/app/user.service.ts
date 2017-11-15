import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http, @Inject('API_URL') private url: string) { }

  async Test() {
    let url = 'https://randomuser.me/api/?results=200';
    let rs: any = await this.http.get(url).toPromise();
    return rs.json();
  }

  async getUsers() {
    let url = this.url + '/api/users';
    let rs: any = await this.http.get(url).toPromise();
    return rs.json();
  }

  async save(username: any, password: any, firstName: any, lastName: any, userTyp: any, isActive: any) {
    let url = this.url + '/api/users';
    let rs: any = await this.http.post(url, {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      userType: userTyp,
      isActive: isActive
    }).toPromise();
    return rs.json();
  }
}
