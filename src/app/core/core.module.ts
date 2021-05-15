import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, NavbarComponent,],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class CoreModule {}
