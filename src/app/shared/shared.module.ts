import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextIconComponent } from './components/input-text-icon/input-text-icon.component';
import { CardComponent } from './components/card/card.component';
import { ModalDeleteComponent } from './components/modal/modal-delete/modal-delete.component';
import { ModalLogoutComponent } from './components/modal/modal-logout/modal-logout.component';


@NgModule({
  declarations: [
    InputTextIconComponent,
    CardComponent,
    ModalDeleteComponent,
    ModalLogoutComponent,
  ],
  imports: [CommonModule],
  exports: [InputTextIconComponent,
    CardComponent,
    ModalDeleteComponent,
    ModalLogoutComponent,
  ],
})
export class SharedModule {}
