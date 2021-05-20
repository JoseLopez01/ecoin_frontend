import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextIconComponent } from './components/input-text-icon/input-text-icon.component';
import { CardComponent } from './components/card/card.component';
import { ModalDeleteComponent } from './components/modal/modal-delete/modal-delete.component';
import { ModalLogoutComponent } from './components/modal/modal-logout/modal-logout.component';
import { ModalAddAwardsComponent } from './components/modal/modal-add-awards/modal-add-awards.component';


@NgModule({
  declarations: [
    InputTextIconComponent,
    CardComponent,
    ModalDeleteComponent,
    ModalLogoutComponent,
    ModalAddAwardsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    InputTextIconComponent,
    CardComponent,
    ModalDeleteComponent,
    ModalLogoutComponent,
    ModalAddAwardsComponent,
  ],
})
export class SharedModule {}
