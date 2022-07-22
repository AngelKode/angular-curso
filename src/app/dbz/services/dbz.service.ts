import {Injectable} from "@angular/core";
import {Personaje} from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

  private _personajes : Personaje[] = [
    {
      nombre : 'Goku',
      poder  : 15000
    },
    {
      nombre : 'Vegetta',
      poder  : 7000
    }
  ];

  get personajes():Personaje[]{
    return [...this._personajes];//Para evitar la referencia de el objeto
  }

  agregarPersonajes(personajeNuevo:Personaje):void{
    this._personajes.push(personajeNuevo);
  }
}
