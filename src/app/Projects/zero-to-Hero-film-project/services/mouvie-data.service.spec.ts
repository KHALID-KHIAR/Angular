import { TestBed } from '@angular/core/testing';

import { MouvieDataService } from './mouvie-data.service';

describe('MouvieDataService', () => {
  let service: MouvieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouvieDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
