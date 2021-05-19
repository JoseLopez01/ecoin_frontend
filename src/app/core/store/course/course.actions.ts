import { Course, Schedule } from '@core/models/class.model';

export class GetCourses {
  static readonly type = '[Course] Get All';
  constructor() {}
}

export class CreateCourse {
  static readonly type = '[Course] Create';
  constructor(public course: Course) {}
}

export class GetWeekDays {
  static readonly type = '[Course] Get Week Days';
  constructor() {}
}

export class GetCourseById {
  static readonly type = '[Course] Get Course By Id';
  constructor(public courseId: number) {}
}

export class CreateCourseSchedule {
  static readonly type = '[Course] Create Schedule';
  constructor(public schedule: Schedule) {}
}
