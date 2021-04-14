import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { GroupsComponent } from './components/groups/groups.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarVerComponent } from './components/navbar-ver/navbar-ver.component';
import { SettingComponent } from './components/setting/setting.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActivitiesComponent,
    GroupsComponent,
    NavbarComponent,
    NavbarVerComponent,
    SettingComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
