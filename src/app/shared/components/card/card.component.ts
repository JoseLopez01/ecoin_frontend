import { Component, Input, OnInit } from '@angular/core';
import { CardOptions } from '@core/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() options!: CardOptions;

  showCloseButton = true;
  styles: any;
  title = '';

  constructor() {}

  ngOnInit(): void {
    if (this.options) {
      this.createStyles();
      this.getOptions();
    } else {
      throw new Error('Options are needed');
    }
  }

  private createStyles(): void {
    const { backgroundColor, height, width } = this.options;
    this.styles = {
      'background-color': backgroundColor || '#FFF',
      height: typeof height === 'string' ? height : `${height}px`,
      width: typeof width === 'string' ? width : `${width}px`,
    };
  }

  private getOptions(): void {
    const { showCloseButton, title } = this.options;
    this.title = title || '';
    this.showCloseButton = showCloseButton || false;
  }
}
