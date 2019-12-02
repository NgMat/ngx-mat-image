import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxMatImageModule} from '../../../ngx-mat-image/src/lib/ngx-mat-image.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMatImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
