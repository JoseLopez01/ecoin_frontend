import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassViewComponent } from './components/class-view/class-view.component';
import { ClassViewHeaderComponent } from './components/class-view-header/class-view-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [ClassViewComponent, ClassViewHeaderComponent],
  imports: [
    CommonModule,
    ClassRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ClassModule { }
