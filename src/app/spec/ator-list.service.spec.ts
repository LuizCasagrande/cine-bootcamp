import { TestBed } from '@angular/core/testing';

import { AtorListService } from '../service/ator-list.service';

describe('AtorListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtorListService = TestBed.get(AtorListService);
    expect(service).toBeTruthy();
  });
});
