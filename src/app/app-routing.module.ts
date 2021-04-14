import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { GroupsComponent } from './components/groups/groups.component';
import { SettingComponent } from './components/setting/setting.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'activities', component: ActivitiesComponent},
  { path: 'groups', component: GroupsComponent},
  { path: 'setting', component: SettingComponent},
  { path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
