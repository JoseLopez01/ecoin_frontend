import { Shop } from "@core/models/shop.model";

//Accion para obtener la tienda de un curso
export class GetCoursesShop {

  static readonly type = '[Shop] Get';
  constructor(public courseId: number) { }
}

//Accion para crear una tienda 
export class CreateShop {

  static readonly type = '[Shop] Create';
  constructor(public shop: Shop) { }
}


