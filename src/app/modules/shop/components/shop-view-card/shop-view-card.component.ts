import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AwardsService } from '@core/services/awards/awards.service';
import { Awards } from 'app/shared/helpers/awards.model';
import { NotificationService } from '@core/services/notification/notification.service';
import { Notification } from 'app/shared/helpers/notification.model';

@Component({
  selector: 'app-shop-view-card',
  templateUrl: './shop-view-card.component.html',
  styleUrls: ['./shop-view-card.component.scss']
})
export class ShopViewCardComponent implements OnInit {

  @Input() a!: Awards;

  card: Awards[] = [];
  notification: Notification[] = [];
  
  constructor(private awardsService: AwardsService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.card = this.awardsService.awards
  }

  awardsDelete(card: Awards) {
    this.awardsService.delete(card);
  }

  onNotification(award:string, ecoins:number){
    this.notificationService.notifications.push(new Notification('nombre_usuario', award, ecoins));
  }


}
