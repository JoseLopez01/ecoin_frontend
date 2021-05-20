import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@configs/app.constants';
import { Course, Schedule } from '@core/models/class.model';
import { Response } from '@core/models/response.model';
import { WeekDay } from '@core/models/weekday.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) { }

  getWeekdays(): Observable<Response<WeekDay>> {
    return this.httpClient.get<Response<WeekDay>>(CONSTANTS.weekdays.all);
  }

  createCourse(course: Course): Observable<Response<any>> {
    return this.httpClient.post<Response<any>>(CONSTANTS.class.create, course);
  }

  getCourses(): Observable<Response<Course>> {
    return this.httpClient.get<Response<Course>>(CONSTANTS.class.base);
  }

  getCourse(courseId: number): Observable<Response<Course>> {
    return this.httpClient.get<Response<Course>>(`${CONSTANTS.class.base}/${courseId}`);
  }

  createClassSchedule(schedule: Schedule): Observable<Response<any>> {
    return this.httpClient.post<Response<any>>(`${CONSTANTS.schedule.base}`, schedule);
  }

}
