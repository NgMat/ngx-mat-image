import { TestBed } from '@angular/core/testing';

import { NgxMatImageService } from './ngx-mat-image.service';

describe('NgxMatImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatImageService = TestBed.get(NgxMatImageService);
    expect(service).toBeTruthy();
  });
});
