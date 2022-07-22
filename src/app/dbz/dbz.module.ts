//Módulos a usarse por el componente
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

//Componente principal
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarPersonajesComponent } from './agregar-personajes/agregar-personajes.component';
import {DbzService} from "./services/dbz.service";

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarPersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    MainPageComponent
  ],
  providers : [
    DbzService
  ]
})
export class DbzModule {}
