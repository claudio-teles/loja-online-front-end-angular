import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from './Produtos';

@Injectable({
  providedIn: 'root'
})
export class ListaDeProdutosService {

  private urlProdutos: string = 'http://localhost:8080/produtos'

  constructor(private http: HttpClient) {}

  listarProdutosEmEstoque(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.urlProdutos)
  }

}
