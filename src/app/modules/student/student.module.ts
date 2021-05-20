import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { StudentViewGridComponent } from './components/student-view-grid/student-view-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgxsModule } from '@ngxs/store';
import { StudentState } from '@core/store/student/student.state';
import { CourseState } from '@core/store/course/course.state';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StudentViewComponent, StudentViewGridComponent, AddStudentComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    NgxsModule.forFeature([
      StudentState,
      CourseState
    ]),
    ReactiveFormsModule
  ],
  exports: [
    StudentViewComponent
  ]
})
export class StudentModule { }
