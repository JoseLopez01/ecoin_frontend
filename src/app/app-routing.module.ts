import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: (): any => import('@modules/class/class.module').then(m => m.ClassModule)
      },
      {
        path: 'shop',
        loadChildren: (): any => import('@modules/shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'setting',
        loadChildren: (): any => import('@modules/setting/setting.module').then(m => m.SettingModule)
      },
      {
        path: 'notifications',
        loadChildren: (): any => import('@modules/notifications/notifications.module').then(m => m.NotificationsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
