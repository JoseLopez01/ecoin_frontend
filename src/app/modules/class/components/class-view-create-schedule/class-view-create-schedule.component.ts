import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeekDay } from '@core/models/weekday.model';
import { CourseState } from '@core/store/course/course.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-class-view-create-schedule',
  templateUrl: './class-view-create-schedule.component.html',
  styleUrls: ['./class-view-create-schedule.component.scss']
})
export class ClassViewCreateScheduleComponent implements OnInit {

  @Input() form!: FormGroup;

  @Select(CourseState.weekDays) weekDays$!: Observable<WeekDay[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
