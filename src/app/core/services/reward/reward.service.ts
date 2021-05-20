import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '@core/models/response.model';
import { CONSTANTS } from '@configs/app.constants';
import { Reward } from '@core/models/reward.model';
import { Price } from '@core/models/price.model';
@Injectable({
  providedIn: 'root'
})
export class RewardService {

  constructor(private httpClient: HttpClient) { }

  //servicio para obtener los Ecoins
  getPrices(): Observable<Response<Price>> {
    return this.httpClient.get<Response<Price>>(CONSTANTS.price.all);
  }

  //Serivicio para obtener los ecoins de un premio
  getPrice(rewardId: number): Observable<Response<Reward>> {
    return this.httpClient.get<Response<Reward>>(`${CONSTANTS.reward.base}/${rewardId}/price`);
  }

  //servico para obtener los premios
  getReward(shopId: number): Observable<Response<Reward>> {
    return this.httpClient.get<Response<Reward>>(`${CONSTANTS.reward.base}/${shopId}`);
  }

  //servicio para crear un premio
  createReward(reward: Reward): Observable<Response<any>> {
    return this.httpClient.post<Response<any>>(`${CONSTANTS.reward.base}`, reward);
  }

  //servicio para crear el precio de un premios
  createPrice(price: Price): Observable<Response<any>> {
    return this.httpClient.post<Response<any>>(`${CONSTANTS.price.base}`, price);
  }

  
}
