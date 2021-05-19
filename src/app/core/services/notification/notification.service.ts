import { Injectable } from '@angular/core';
import { Notification } from 'app/shared/helpers/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications: Notification[] = [];
  
  constructor() { }
}
