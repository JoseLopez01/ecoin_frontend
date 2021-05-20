import { Injectable } from '@angular/core';
import { Shop } from '@core/models/shop.model';
import { ShopService } from '@core/services/shop/shop.service';
import { State, Action, StateContext, Store, Selector } from '@ngxs/store';
import { CreateShop, GetCoursesShop } from './shop.actions';
//import { ShoGetCoursesShoppAction } from './shop.actions';

export class ShopStateModel {
  currentCourseId!: number;
  shop!: Shop[];
}

const defaults = {
  currentCourseId: 0,
  shop: []
};

@State<ShopStateModel>({
  name: 'shop',
  defaults
})
@Injectable()

export class ShopState {

  constructor(
    private shopService: ShopService,
    private store: Store
  ) {}

  @Selector()
  static getActivities({ shop }: ShopStateModel): Shop[] {
    return shop;
  }

  @Action(GetCoursesShop)
  getCourseActivities({ patchState }: StateContext<ShopStateModel>, { courseId }: GetCoursesShop): void {
    this.shopService.getShop(courseId).subscribe({
      next: response => {
        patchState({ shop: response.data, currentCourseId: courseId });
      }
    });
  }
  
  @Action(CreateShop)
  createActivity({ getState }: StateContext<ShopStateModel>, { shop }: CreateShop): void {
    this.shopService.createShop({ ...shop, classid: getState().currentCourseId }).subscribe({
      next: response => {
        if (response.status === 201) {
          this.store.dispatch(new GetCoursesShop(getState().currentCourseId));
        }
      }
    });
  }
  // @Action(CreateShop)
  // createCourse({getState()}: StateContext<ShopStateModel>, { shop }: CreateShop): void {
  //   this.shopService.createShop(shop).subscribe({
  //     next: response => {
  //       if (response.status === 201) {
  //         this.store.dispatch(new GetCoursesShop()));
  //       }
  //     }
  //   });
  // }
}
