import { TestBed } from '@angular/core/testing';

import { VerProdutoService } from './ver-produto.service';

describe('VerProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerProdutoService = TestBed.get(VerProdutoService);
    expect(service).toBeTruthy();
  });
});
