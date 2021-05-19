import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { ShopViewComponent } from './components/shop-view/shop-view.component';
import { ShopViewHeaderComponent } from './components/shop-view-header/shop-view-header.component';
import { ShopViewCardComponent } from './components/shop-view-card/shop-view-card.component';


@NgModule({
  declarations: [
    ShopViewComponent,
    ShopViewHeaderComponent,
    ShopViewCardComponent
    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
