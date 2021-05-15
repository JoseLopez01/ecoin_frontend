import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingViewComponent } from './components/setting-view/setting-view.component';

const routes: Routes = [
  {
    path: '',
    component: SettingViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }