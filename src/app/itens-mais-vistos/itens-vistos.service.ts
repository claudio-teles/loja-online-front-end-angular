import { Injectable } from '@angular/core';
import { Itens } from './Itens';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensVistosService {

  private urlItensMaisVistos: string = 'http://localhost:8080/itens_tambem_vistos'
  
  constructor(private http: HttpClient) {}
  
  mostrarListaProdutosMaisVistos(): Observable<Itens[]> {
    return this.http.get<Itens[]>(this.urlItensMaisVistos)
  }
  
}
