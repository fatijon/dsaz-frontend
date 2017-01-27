import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DsaComponent} from "./dsa.component";
import {CharakterService} from "./charakter.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DsaComponent
  ],
  providers: [ CharakterService ]
})
export class DsaModule {
}
