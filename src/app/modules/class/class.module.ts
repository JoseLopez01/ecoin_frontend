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

@NgModule({
  declarations: [
    ClassViewComponent,
    ClassViewHeaderComponent,
    ClassViewGridComponent,
    ClassViewInfoComponent,
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    AgGridModule.withComponents([]),
  ],
})
export class ClassModule {}
