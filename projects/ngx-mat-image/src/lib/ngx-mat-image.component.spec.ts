import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatImageComponent } from './ngx-mat-image.component';

describe('NgxMatImageComponent', () => {
  let component: NgxMatImageComponent;
  let fixture: ComponentFixture<NgxMatImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
