import { TestBed } from '@angular/core/testing';

import { YourService } from './your.service';

describe('YourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourService = TestBed.get(YourService);
    expect(service).toBeTruthy();
  });
});
