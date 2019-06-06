import { TestBed } from '@angular/core/testing';

import { ItensVistosService } from './itens-vistos.service';

describe('ItensVistosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItensVistosService = TestBed.get(ItensVistosService);
    expect(service).toBeTruthy();
  });
});
