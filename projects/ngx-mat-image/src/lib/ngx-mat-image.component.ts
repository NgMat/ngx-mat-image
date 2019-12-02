import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-mat-image',
  templateUrl: './ngx-mat-image.component.html',
  styleUrls: ['/ngx-mat-image.component.css']
})
export class NgxMatImageComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('width') width: string;
  // tslint:disable-next-line:no-input-rename
  @Input('height') height: string;

  constructor() {
  }

  ngOnInit() {
  }

  cardStyle() {
    return {
      width: this.width,
      height: this.height
    };
  }
}
