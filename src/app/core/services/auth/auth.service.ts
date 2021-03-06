import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@configs/app.constants';
import { LoginInfo, LoginResponse } from '@core/models/auth.model';
import { User } from '@core/models/user.model';
import { Response } from '@core/models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(loginInfo: LoginInfo): Observable<Response> {
    return this.httpClient.post<Response>(CONSTANTS.auth.login, loginInfo);
  }

  register(registerInfo: User): Observable<any> {
    return this.httpClient.post<Response>(CONSTANTS.auth.register, registerInfo);
  }

}
