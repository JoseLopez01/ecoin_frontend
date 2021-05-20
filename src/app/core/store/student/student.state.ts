import { Injectable } from '@angular/core';
import { User } from '@core/models/user.model';
import { StudentService } from '@core/services/student/student.service';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetCourseStudents, SearchStudents } from './student.actions';

export class StudentStateModel {
  public searchedStudents!: User[];
  public currentCourseId!: number;
  public students!: User[];
}

const defaults: StudentStateModel = {
  searchedStudents: [],
  currentCourseId: 0,
  students: []
};

@State<StudentStateModel>({
  name: 'student',
  defaults
})
@Injectable()
export class StudentState {

  constructor(private studentService: StudentService) {}

  @Selector()
  static getStudents({ students }: StudentStateModel): User[] {
    return students;
  }

  @Selector()
  static getSearchedStudents({ searchedStudents }: StudentStateModel): User[] {
    return searchedStudents;
  }

  @Action(GetCourseStudents)
  getCourseStudents({ patchState }: StateContext<StudentStateModel>, { courseId }: GetCourseStudents): void {
    this.studentService.getCourseStudent(courseId).subscribe({
      next: response => {
        patchState({ students: response.data, currentCourseId: courseId });
      }
    });
  }

  @Action(SearchStudents)
  searchStudents({ patchState }: StateContext<StudentStateModel>, { search }: SearchStudents): void {
    this.studentService.searchStudents(search).subscribe({
      next: response => {
        patchState({ searchedStudents: response.data });
      }
    });
  }
}
