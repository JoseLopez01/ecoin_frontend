import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@configs/app.constants';
import { Activity } from '@core/models/activity.model';
import { Response } from '@core/models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getActivities(courseId: number): Observable<Response<Activity>> {
    return this.httpClient.get<Response<Activity>>(`${CONSTANTS.class.base}/${courseId}/activities`);
  }

  createActivity(activity: Activity): Observable<Response<any>> {
    return this.httpClient.post<Response<any>>(CONSTANTS.activity.base, activity);
  }
  
}
