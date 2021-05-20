import { Activity } from '@core/models/activity.model';

export class GetCourseActivities {
  static readonly type = '[Activity] Get';
  constructor(public courseId: number) {}
}

export class CreateActivity {
  static readonly type = '[Activity] Create';
  constructor(public activity: Activity) {}
}
