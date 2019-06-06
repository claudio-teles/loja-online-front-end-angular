import { TestBed } from '@angular/core/testing';

import { VerCarrinhoService } from './ver-carrinho.service';

describe('VerCarrinhoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerCarrinhoService = TestBed.get(VerCarrinhoService);
    expect(service).toBeTruthy();
  });
});
