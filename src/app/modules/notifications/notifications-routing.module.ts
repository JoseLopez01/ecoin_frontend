import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsViewComponent } from './components/notifications-view/notifications-view.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
