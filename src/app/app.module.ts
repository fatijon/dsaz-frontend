import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DsaComponent} from './dsa/dsa.component';
import {KeysPipe} from "./shared/key.pipe";
import {CapitalizePipe} from "./shared/capitalize.pipe";
import {DiceComponent} from './dice-simulation/dice.simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    DsaComponent,
    KeysPipe,
    CapitalizePipe,
    DsaComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
