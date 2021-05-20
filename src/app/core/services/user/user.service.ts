import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@configs/app.constants';
import { Response } from '@core/models/response.model';
import { Semester, User, UserType } from '@core/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserTypes(): Observable<Response<UserType>> {
    return this.httpClient.get<Response<UserType>>(CONSTANTS.user.userTypes);
  }

  getSemesters(): Observable<Response<Semester>> {
    return this.httpClient.get<Response<Semester>>(CONSTANTS.user.semesters);
  }

  getLoggedUser(): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(CONSTANTS.auth.user);
  }
}
