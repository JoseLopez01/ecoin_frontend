import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@configs/app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserTypes(): Observable<any> {
    return this.httpClient.get(CONSTANTS.user.userTypes);
  }

  getSemesters(): Observable<any> {
    return this.httpClient.get(CONSTANTS.user.semesters);
  }
}
