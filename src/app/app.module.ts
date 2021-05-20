import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RequestInterceptor } from '@core/services/interceptor/request.interceptor';
import { AuthState } from '@core/store/auth/auth.state';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
<<<<<<< HEAD
    FormsModule
=======
    NgxsModule.forRoot([
      AuthState
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
>>>>>>> d26bbea55bd1eee25d86d6d414930206ae0a6d5d
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
