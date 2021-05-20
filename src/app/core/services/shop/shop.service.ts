import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@configs/app.constants';
import { Activity } from '@core/models/activity.model';
import { Observable } from 'rxjs';
import { Response } from '@core/models/response.model';
import { Shop } from '@core/models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private httpClient: HttpClient) { }

  //Servicio para obtener una tienda de una clase especifica
  getShop(courseId: number): Observable<Response<Shop>> {
    return this.httpClient.get<Response<Activity>>(`${CONSTANTS.class.base}/${courseId}/shop`);
  }

  //Servicio para crear una tienda 
  createShop(shop: Shop): Observable<Response<any>> {
    return this.httpClient.post<Response<any>>(CONSTANTS.shop.base, shop);
  }

}
