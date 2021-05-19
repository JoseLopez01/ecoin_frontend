import { Component, OnInit } from '@angular/core';
import { CardOptions } from '@core/models/card.model';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {

  cardOptions!: CardOptions;
  selectedClassId!: number;

  constructor() { }

  ngOnInit(): void {
    this.createCard();
  }

  onClassSelected(courseId: number): void {
    this.selectedClassId = courseId;
  }

  private createCard(): void {
    this.cardOptions = {
      showCloseButton: true,
      height: '95%',
      width: '100%',
      title: 'Algorithms'
    };
  }

}
