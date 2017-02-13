import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DsaComponent} from './dsa/dsa.component';
import {CharakterService} from "./dsa/charakter.service";

@NgModule({
  declarations: [
    AppComponent,
    DsaComponent
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
