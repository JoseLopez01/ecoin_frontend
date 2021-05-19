import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '@core/models/class.model';
import { WeekDay } from '@core/models/weekday.model';
import { CreateCourseSchedule, GetWeekDays } from '@core/store/course/course.actions';
import { CourseState } from '@core/store/course/course.state';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-class-view-schedule',
  templateUrl: './class-view-schedule.component.html',
  styleUrls: ['./class-view-schedule.component.scss']
})
export class ClassViewScheduleComponent implements OnInit {

  @Select(CourseState.selectedCourse) selectedCourse$!: Observable<Course>;

  currentDate: Date = new Date();
  form!: FormGroup;
  adding = false;

  private subscription: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getWeekDays();
    this.getSelectedCourse();
  }

  onAdd(): void {
    this.adding = true;
  }

  onSave(): void {
    this.store.dispatch(new CreateCourseSchedule(this.form.value));
    this.form.reset();
    this.adding = false;
  }

  private createForm(): void {
    this.form = this.formBuilder.group(
      {
        courseid: [null, Validators.required],
        weekdayid: [null, Validators.required],
      }
    );
  }

  private getWeekDays(): void {
    this.store.dispatch(new GetWeekDays());
  }

  private getSelectedCourse(): void {
    this.subscription.push(
      this.selectedCourse$.subscribe({
        next: course => {
          if (course) {
            this.form.get('courseid')?.setValue(course.courseid);
          }
        }
      })
    );
  }

}
