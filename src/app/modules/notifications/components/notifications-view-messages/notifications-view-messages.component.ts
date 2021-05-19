import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '@core/services/notification/notification.service';
import { Notification } from 'app/shared/helpers/notification.model';

@Component({
  selector: 'app-notifications-view-messages',
  templateUrl: './notifications-view-messages.component.html',
  styleUrls: ['./notifications-view-messages.component.scss']
})
export class NotificationsViewMessagesComponent implements OnInit {

  @Input() a!: Notification;
  notification : Notification[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notification = this.notificationService.notifications
  }

}
