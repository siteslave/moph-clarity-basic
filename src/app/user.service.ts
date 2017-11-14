import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  async getUsers() {
    let url = 'https://randomuser.me/api/?results=200';
    let rs: any = await this.http.get(url).toPromise();
    return rs.json();
  }
}
