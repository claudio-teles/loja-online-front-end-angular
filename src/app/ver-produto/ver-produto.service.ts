import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './Produto';

@Injectable({
  providedIn: 'root'
})
export class VerProdutoService {

  private urlProduto: string = 'http://localhost:8080/produtos/'
  inicio: number
  fim: number
  id: string = ''
  
  produto: {}
  
  constructor(private http: HttpClient, private rota: Router) {}
  
  VerUmProduto(): Observable<Produto> {
    this.inicio = this.rota.url.lastIndexOf('/')
    this.fim = this.rota.url.length
    this.id = this.rota.url.substr(this.inicio, this.fim)

    return this.http.get<Produto>(this.urlProduto.concat(this.id))
  }
  
}
