import { TestBed } from '@angular/core/testing';

import { FilmeService } from '../service/filme.service';

describe('FilmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmeService = TestBed.get(FilmeService);
    expect(service).toBeTruthy();
  });
});
