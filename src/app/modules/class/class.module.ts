import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClassRoutingModule } from './class-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { AgGridModule } from 'ag-grid-angular';

import { ClassViewComponent } from './components/class-view/class-view.component';
import { ClassViewHeaderComponent } from './components/class-view-header/class-view-header.component';
import { ClassViewGridComponent } from './components/class-view-grid/class-view-grid.component';
import { ClassViewInfoComponent } from './components/class-view-info/class-view-info.component';
import { ClassViewScheduleComponent } from './components/class-view-schedule/class-view-schedule.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { NgxsModule } from '@ngxs/store';
import { CourseState } from '@core/store/course/course.state';
import { ClassViewCreateScheduleComponent } from './components/class-view-create-schedule/class-view-create-schedule.component';

@NgModule({
  declarations: [
    ClassViewComponent,
    ClassViewHeaderComponent,
    ClassViewGridComponent,
    ClassViewInfoComponent,
    ClassViewScheduleComponent,
    CreateClassComponent,
    ClassViewCreateScheduleComponent,
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    AgGridModule.withComponents([]),
    NgxsModule.forFeature([
      CourseState
    ])
  ],
})
export class ClassModule {}
