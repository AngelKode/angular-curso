import {NgModule} from "@angular/core";

import {ContadorComponent} from "./_contador/contador.component";

@NgModule({
    declarations : [
      ContadorComponent
    ],
    exports : [
      ContadorComponent
    ],
    imports : []
})
export class ContadorModule{}
