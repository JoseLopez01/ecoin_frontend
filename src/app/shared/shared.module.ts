import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextIconComponent } from './components/input-text-icon/input-text-icon.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [InputTextIconComponent, CardComponent],
  imports: [CommonModule],
  exports: [InputTextIconComponent, CardComponent],
})
export class SharedModule {}
