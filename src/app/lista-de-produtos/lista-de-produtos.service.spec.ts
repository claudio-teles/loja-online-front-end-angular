import { TestBed } from '@angular/core/testing';

import { ListaDeProdutosService } from './lista-de-produtos.service';

describe('ListaDeProdutosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaDeProdutosService = TestBed.get(ListaDeProdutosService);
    expect(service).toBeTruthy();
  });
});
