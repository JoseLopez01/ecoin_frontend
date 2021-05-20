//Servicio para manejar los premios
import { Injectable } from '@angular/core';
import { Awards } from 'app/shared/helpers/awards.model';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {
  //Creamos un objeto e inicializamos el arreglo con algunos elementos
  awards: Awards[] = [
    new Awards("Curso web", 2000, "curso teorico y practico"),
    new Awards("Curso makeup", 4000, "curso teorico y practico"),
  ];

  constructor() { }

  //Metodo para eliminar un registros
  delete(award: Awards) {
    //Buscamos el indice del arreglo
    const indice: number = this.awards.indexOf(award);
    //Le decimos que nos elimine solo 1
    this.awards.splice(indice, 1);
  }

}
