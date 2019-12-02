import {NgModule} from '@angular/core';
import {NgxMatImageComponent} from './ngx-mat-image.component';
import {MatCardModule, MatSliderModule} from '@angular/material';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [NgxMatImageComponent],
  imports: [
    MatCardModule,
    CommonModule,
    MatSliderModule
  ],
  exports: [NgxMatImageComponent]
})
export class NgxMatImageModule { }
