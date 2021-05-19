import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@configs/app.constants';
import { Course, Schedule } from '@core/models/class.model';
import { Response } from '@core/models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) { }

  getWeekdays(): Observable<Response> {
    return this.httpClient.get<Response>(CONSTANTS.weekdays.all);
  }

  createClass(course: Course): Observable<Response> {
    return this.httpClient.post<Response>(CONSTANTS.class.create, course);
  }

  getTeacherClasses(): Observable<Response> {
    return this.httpClient.get<Response>(CONSTANTS.class.base);
  }

  getClass(courseId: number): Observable<Response> {
    return this.httpClient.get<Response>(`${CONSTANTS.class.base}/${courseId}`);
  }

  createClassSchedule(schedule: Schedule): Observable<Response> {
    return this.httpClient.post<Response>(`${CONSTANTS.schedule.base}`, schedule);
  }

}
