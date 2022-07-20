import { Component,} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes:string[] = ['Goku','Thor','Black Widow','Hulk'];
  heroeBorrado:string = '';

  borrarHeroe():string{
    const ultimaPosicion = this.heroes.length - 1;

    if(ultimaPosicion < 0){
      this.heroeBorrado = '';
      return this.heroeBorrado;
    }

    this.heroeBorrado = this.heroes[ultimaPosicion];
    this.heroes.splice(ultimaPosicion,1);

    return this.heroeBorrado;
  }
}
