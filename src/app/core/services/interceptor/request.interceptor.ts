/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedRequest = request;
    if (this.authService.isAuthenticated()) {
      modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }
    return next.handle(modifiedRequest);
  }
}
