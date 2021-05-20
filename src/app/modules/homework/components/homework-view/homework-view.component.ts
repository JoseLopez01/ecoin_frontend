import { Component, OnInit } from '@angular/core';
import { Course } from '@core/models/class.model';
import { GetCourseActivities } from '@core/store/activity/activity.actions';
import { CourseState } from '@core/store/course/course.state';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-homework-view',
  templateUrl: './homework-view.component.html',
  styleUrls: ['./homework-view.component.scss']
})
export class HomeworkViewComponent implements OnInit {

  @Select(CourseState.selectedCourse) selectedCourse$!: Observable<Course>;

  private subscriptions: Subscription[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getActivities();
  }

  private getActivities(): void {
    this.subscriptions.push(
      this.selectedCourse$.subscribe({
        next: course => {
          if (course) {
            this.store.dispatch(new GetCourseActivities(course.courseid));
          }
        }
      })
    );
  }

}
