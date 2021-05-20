import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@configs/app.constants';
import { StudentCourse } from '@core/models/class.model';
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

  addStudentToCourse(info: StudentCourse): Observable<Response<any>> {
    return this.httpClient.post<Response<any>>(CONSTANTS.students.addToCourse, info);
  }
}
