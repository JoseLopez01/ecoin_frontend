import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { ShopViewComponent } from './components/shop-view/shop-view.component';

@NgModule({
  declarations: [
    ShopViewComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ShopModule {}
