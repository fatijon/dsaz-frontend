import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DsaComponent} from './dsa/dsa.component';
import {CharakterService} from "./dsa/charakter.service";
import {DiceComponent} from './dice-simulation/dice.simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    DsaComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [CharakterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
