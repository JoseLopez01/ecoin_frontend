import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkViewComponent } from './components/homework-view/homework-view.component';
import { HomeworkGridComponent } from './components/homework-grid/homework-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgxsModule } from '@ngxs/store';
import { ActivityState } from '@core/store/activity/activity.state';
import { CourseState } from '@core/store/course/course.state';
import { HomeworkHeaderComponent } from './components/homework-header/homework-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateHomeworkComponent } from './components/create-homework/create-homework.component';

@NgModule({
  declarations: [
    HomeworkViewComponent,
    HomeworkGridComponent,
    HomeworkHeaderComponent,
    CreateHomeworkComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    NgxsModule.forFeature([
      ActivityState,
      CourseState
    ]),
    ReactiveFormsModule
  ],
  exports: [HomeworkViewComponent]
})
export class HomeworkModule {}
