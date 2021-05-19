import { Component, OnInit } from '@angular/core';
import { AwardsService } from '@core/services/awards/awards.service';
import { Awards } from 'app/shared/helpers/awards.model';

@Component({
  selector: 'app-shop-view-header',
  templateUrl: './shop-view-header.component.html',
  styleUrls: ['./shop-view-header.component.scss']
})
export class ShopViewHeaderComponent implements OnInit {
  opcion: string = "accept";
  award: Awards[] = [];
  constructor(private awardsService: AwardsService) { }

  ngOnInit() {
    this.award = this.awardsService.awards;
  }
  delete(award: Awards) {
    if (this.opcion === "accept") {
      this.awardsService.delete(award);
    }

  }

}
