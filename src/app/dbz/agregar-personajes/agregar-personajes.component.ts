import {Component, Input} from '@angular/core';

import {Personaje} from "../interfaces/dbz.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: 'agregar-personajes.component.html',
})
export class AgregarPersonajesComponent {

  @Input() nuevo : Personaje = {
    nombre : '',
    poder  : 0
  };

  agregar():void {
    //Evitamos nombres vacios
    if(this.nuevo.nombre.trim().length === 0) return;

    //Agregamos el personaje usando el servicio
    this.dbzService.agregarPersonajes(this.nuevo);

    //Limpiamos los datos
    this.nuevo = {
      nombre : "",
      poder  : 0
    }
  }

  constructor(private dbzService:DbzService) {}
}
