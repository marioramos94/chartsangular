import { TestBed } from '@angular/core/testing';

import { ChartappService } from './chartapp.service';

describe('ChartappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartappService = TestBed.get(ChartappService);
    expect(service).toBeTruthy();
  });
});
