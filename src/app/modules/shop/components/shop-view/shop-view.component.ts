import { Component, OnInit } from '@angular/core';
import { AwardsService } from '@core/services/awards/awards.service';
import { Awards } from 'app/shared/helpers/awards.model';

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.scss']
})
export class ShopViewComponent implements OnInit {
  awards: Awards[] = [];

  //Inicializamos el atributo con los arreglos que tenemos en el servicio
  constructor(private awardsService: AwardsService) {
    this.awards = this.awardsService.awards
  }

  ngOnInit() {
  }

}
