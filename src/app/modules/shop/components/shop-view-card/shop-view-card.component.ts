import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AwardsService } from '@core/services/awards/awards.service';
import { Awards } from 'app/shared/helpers/awards.model';

@Component({
  selector: 'app-shop-view-card',
  templateUrl: './shop-view-card.component.html',
  styleUrls: ['./shop-view-card.component.scss']
})
export class ShopViewCardComponent implements OnInit {
  @Input() a!: Awards;

  card: Awards[] = [];

  constructor(private awardsService: AwardsService) {
  }

  ngOnInit(): void {
    this.card = this.awardsService.awards
  }

  awardsDelete(card: Awards) {
    this.awardsService.delete(card);
  }

}
