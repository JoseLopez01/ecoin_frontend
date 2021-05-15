import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { NotificationsViewComponent } from './components/notifications-view/notifications-view.component';

@NgModule({
  declarations: [
    NotificationsViewComponent,
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class NotificationsModule {}
