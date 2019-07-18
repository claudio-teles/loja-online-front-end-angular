import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private urlCasdastroCliente: string = 'http://localhost:8080/clientes_cadastrados'

  constructor(private http: HttpClient) {}

  realizarCadastro(cliente: Cliente): Observable<any> {
    return this.http.post(this.urlCasdastroCliente, cliente)
  }

}
