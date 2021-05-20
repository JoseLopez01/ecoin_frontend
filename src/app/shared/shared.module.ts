import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextIconComponent } from './components/input-text-icon/input-text-icon.component';
import { CardComponent } from './components/card/card.component';
import { ModalDeleteComponent } from './components/modal/modal-delete/modal-delete.component';
import { ModalLogoutComponent } from './components/modal/modal-logout/modal-logout.component';
<<<<<<< HEAD
import { ModalCreateActivityComponent } from './components/modal/modal-create-activity/modal-create-activity.component';
import { ModalAddAwardsComponent } from './components/modal/modal-add-awards/modal-add-awards.component';

=======
>>>>>>> d26bbea55bd1eee25d86d6d414930206ae0a6d5d


@NgModule({
  declarations: [
    InputTextIconComponent,
    CardComponent,
<<<<<<< HEAD
    ModalCreateClassComponent, 
    ModalDeleteComponent, 
    ModalLogoutComponent, 
    ModalCreateActivityComponent,
    ModalAddAwardsComponent,
  
  ],
  imports: [CommonModule, FormsModule],
  exports: [InputTextIconComponent, 
    CardComponent, 
    ModalCreateClassComponent, 
    ModalDeleteComponent, 
    ModalLogoutComponent, 
    ModalCreateActivityComponent,
    ModalAddAwardsComponent,
    
   
=======
    ModalDeleteComponent,
    ModalLogoutComponent,
  ],
  imports: [CommonModule],
  exports: [InputTextIconComponent,
    CardComponent,
    ModalDeleteComponent,
    ModalLogoutComponent,
>>>>>>> d26bbea55bd1eee25d86d6d414930206ae0a6d5d
  ],
})
export class SharedModule {}
