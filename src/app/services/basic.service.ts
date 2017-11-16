import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BasicService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: Http
  ) { }

  async doLogin(username: string, password: string) {
    let rs: any = await this.http.post(this.apiUrl + '/login/auth', {
      username: username,
      password: password
    }).toPromise();
    return rs.json();
  }
}
