import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AwardsService } from '@core/services/awards/awards.service';
import { Awards } from 'app/shared/helpers/awards.model';

@Component({
  selector: 'app-modal-add-awards',
  templateUrl: './modal-add-awards.component.html',
  styleUrls: ['./modal-add-awards.component.scss']
})
export class ModalAddAwardsComponent implements OnInit {
  title: string = "";
  ecoins: number = 0;
  description: string = "";

  constructor(private awardsService: AwardsService) {}

  ngOnInit() {}

  onAwards() {
  this.awardsService.awards.push(new Awards (this.title, this.ecoins, this.description));
  }

}

