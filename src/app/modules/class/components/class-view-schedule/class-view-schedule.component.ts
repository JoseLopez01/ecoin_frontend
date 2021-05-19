import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeekDay } from '@core/models/weekday.model';
import { ClassService } from '@core/services/class/class.service';

@Component({
  selector: 'app-class-view-schedule',
  templateUrl: './class-view-schedule.component.html',
  styleUrls: ['./class-view-schedule.component.scss']
})
export class ClassViewScheduleComponent implements OnInit {

  @Input() courseId = 0;

  classSchedules: any[] = [];

  weekDays: WeekDay[] = [];
  form!: FormGroup;
  adding = false;

  constructor(
    private formBuilder: FormBuilder,
    private classService: ClassService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.getWeekDays();
  }

  onAdd(): void {
    this.adding = true;
  }

  onSave(): void {
    this.classService.createClassSchedule(this.form.value).subscribe();
  }

  private createForm(): void {
    this.form = this.formBuilder.group(
      {
        courseid: [this.courseId, Validators.required],
        weekdayid: [null, Validators.required],
      }
    );
  }

  private getWeekDays(): void {
    this.classService.getWeekdays().subscribe({
      next: (response) => {
        this.weekDays = response.data;
      }
    });
  }

}
