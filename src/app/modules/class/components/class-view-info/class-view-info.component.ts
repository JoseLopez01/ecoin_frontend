import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@core/models/class.model';
import { ClassService } from '@core/services/class/class.service';

enum TABS {
  homeworks = 'homeworks',
  schedule = 'schedule',
  students = 'students',
  ecoins = 'ecoins'
};

@Component({
  selector: 'app-class-view-info',
  templateUrl: './class-view-info.component.html',
  styleUrls: ['./class-view-info.component.scss']
})
export class ClassViewInfoComponent implements OnInit {

  @Input() courseId = 0;

  selectedTab = TABS.schedule;
  tabs = TABS;

  selectedClass!: Course;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.getSelectedClass();
  }

  private getSelectedClass(): void {
    if (this.courseId) {
      this.classService.getClass(this.courseId).subscribe({
        next: response => {
          this.selectedClass = response.data[0];
        }
      });
    }
  }

}
