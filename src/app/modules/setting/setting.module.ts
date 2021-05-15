import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { SettingViewComponent } from './components/setting-view/setting-view.component';
import { SettingViewProfileComponent } from './components/setting-view-profile/setting-view-profile.component';
import { SettingViewInfoComponent } from './components/setting-view-info/setting-view-info.component';

@NgModule({
  declarations: [
    SettingViewComponent,
    SettingViewProfileComponent,
    SettingViewInfoComponent,
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SettingModule {}
