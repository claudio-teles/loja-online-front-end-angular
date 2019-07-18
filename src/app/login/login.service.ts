import { Injectable } from '@angular/core';
import { Login } from './Login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin: string = 'http://localhost:8080/clientes_logados'

  constructor(private http: HttpClient) {}

  fazerLogin(login: Login): Observable<Response> {
    return this.http.put<Response>(this.urlLogin, login)
  }

}
