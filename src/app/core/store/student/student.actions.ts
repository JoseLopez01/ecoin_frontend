export class GetCourseStudents {
  static readonly type = '[Student] Get';
  constructor(public courseId: number) {}
}

export class SearchStudents {
  static readonly type = '[Student] Search';
  constructor(public search: string) {}
}

export class AddStudentToCourse {
  static readonly type = '[Student] Add To Course';
  constructor(public userId: number) {}
}
