import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { NotificationsViewComponent } from './components/notifications-view/notifications-view.component';
import { NotificationsViewHeaderComponent } from './components/notifications-view-header/notifications-view-header.component';
import { NotificationsViewMessagesComponent } from './components/notifications-view-messages/notifications-view-messages.component';

@NgModule({
  declarations: [
    NotificationsViewComponent,
    NotificationsViewHeaderComponent,
    NotificationsViewMessagesComponent,
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class NotificationsModule {}
