import {Component} from "@angular/core";

@Component({
  selector : 'app-contador',
  template :
    `
      <h1>{{title}}</h1>
      <h3>La base es: {{base}}</h3>

      <button (click)="acumular(base)">+ {{base}}</button>
      <span>{{contador}}</span>
      <button (click)="acumular(base * -1)">- {{base}}</button>
  `
})
export class ContadorComponent{
  public title:string = 'Contador App';
  public contador:number = 0;
  public base:number = 2;

  acumular(valor : number) : void{
    this.contador += valor;
  }
}
