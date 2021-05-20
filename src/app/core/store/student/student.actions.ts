export class GetCourseStudents {
  static readonly type = '[Student] Get';
  constructor(public courseId: number) {}
}

export class SearchStudents {
  static readonly type = '[Student] Search';
  constructor(public search: string) {}
}
