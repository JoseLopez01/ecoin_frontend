import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@configs/app.constants';
import { Response } from '@core/models/response.model';
import { User } from '@core/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getCourseStudent(courseId: number): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(`${CONSTANTS.class.base}/${courseId}/students`);
  }

  searchStudents(search: string): Observable<Response<User>> {
    return this.httpClient.get<Response<User>>(`${CONSTANTS.user.base}/${search}/student`);
  }
}
