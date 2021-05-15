import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextIconComponent } from './components/input-text-icon/input-text-icon.component';
import { CardComponent } from './components/card/card.component';
import { ModalCreateClassComponent } from './components/modal/modal-create-class/modal-create-class.component';
import { ModalDeleteComponent } from './components/modal/modal-delete/modal-delete.component';
import { ModalLogoutComponent } from './components/modal/modal-logout/modal-logout.component';
import { ModalCreateActivityComponent } from './components/modal/modal-create-activity/modal-create-activity.component';


@NgModule({
  declarations: [
    InputTextIconComponent, 
    CardComponent,
    ModalCreateClassComponent, 
    ModalDeleteComponent, 
    ModalLogoutComponent, 
    ModalCreateActivityComponent,
  ],
  imports: [CommonModule],
  exports: [InputTextIconComponent, 
    CardComponent, 
    ModalCreateClassComponent, 
    ModalDeleteComponent, 
    ModalLogoutComponent, 
    ModalCreateActivityComponent,
  ],
})
export class SharedModule {}
