import { Injectable } from '@angular/core';
import { Course } from '@core/models/class.model';
import { WeekDay } from '@core/models/weekday.model';
import { ClassService } from '@core/services/class/class.service';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { CreateCourse, CreateCourseSchedule, GetCourseById, GetCourses, GetWeekDays } from './course.actions';

export class CourseStateModel {
  public selectedCourse!: Course | null;
  public weekDays!: WeekDay[];
  public courses!: Course[];
  public showInfo!: boolean;
}

const defaults: CourseStateModel = {
  selectedCourse: null,
  showInfo: false,
  weekDays: [],
  courses: []
};

@State<CourseStateModel>({
  name: 'course',
  defaults
})
@Injectable()
export class CourseState {

  constructor(
    private courseService: ClassService,
    private store: Store
  ) {}

  @Selector()
  static courses({ courses }: CourseStateModel): Course[] {
    return courses;
  }

  @Selector()
  static weekDays({ weekDays }: CourseStateModel): WeekDay[] {
    return weekDays;
  }

  @Selector()
  static selectedCourse({ selectedCourse }: CourseStateModel): Course | null {
    return selectedCourse;
  }

  @Selector()
  static showInfo({ showInfo }: CourseStateModel): boolean {
    return showInfo;
  }

  @Action(GetCourses)
  getCourses({ patchState }: StateContext<CourseStateModel>): void {
    this.courseService.getCourses().subscribe({
      next: response => {
        patchState({ courses: response.data });
      }
    });
  }

  @Action(GetWeekDays)
  getWeekDays({ patchState }: StateContext<CourseStateModel>): void {
    this.courseService.getWeekdays().subscribe({
      next: response => {
        patchState({ weekDays: response.data });
      }
    });
  }

  @Action(CreateCourse)
  createCourse({}: StateContext<CourseStateModel>, { course }: CreateCourse): void {
    this.courseService.createCourse(course).subscribe({
      next: response => {
        if (response.status === 201) {
          this.store.dispatch(new GetCourses());
        }
      }
    });
  }

  @Action(GetCourseById)
  getCourseById({ patchState }: StateContext<CourseStateModel>, { courseId }: GetCourseById): void {
    this.courseService.getCourse(courseId).subscribe({
      next: response => {
        patchState({ selectedCourse: response.data[0], showInfo: true });
      }
    });
  }

  @Action(CreateCourseSchedule)
  createCourseSchedule({ getState }: StateContext<CourseStateModel>, { schedule }: CreateCourseSchedule): void {
    this.courseService.createClassSchedule(schedule).subscribe({
      next: response => {
        if (response.status === 201) {
          const selected = getState().selectedCourse;
          if (selected?.courseid) {
            this.store.dispatch(new GetCourseById(selected.courseid));
          }
        }
      }
    });
  }
}
