import { Component, OnInit } from '@angular/core';
import { Course } from '@core/models/class.model';
import { CourseState } from '@core/store/course/course.state';
import { GetCourseStudents } from '@core/store/student/student.actions';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {

  @Select(CourseState.selectedCourse) selectedCourse$!: Observable<Course>;

  searching = false;

  private subscription: Subscription[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(): void {
    this.subscription.push(
      this.selectedCourse$.subscribe({
        next: course => {
          if (course) {
            this.store.dispatch(new GetCourseStudents(course.courseid));
          }
        }
      })
    );
  }

}
