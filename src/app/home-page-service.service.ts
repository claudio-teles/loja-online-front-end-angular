import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensagem } from './mensagem';
import { Observable } from 'rxjs';
//import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {

  private url: string = '../'

  constructor(private http: HttpClient) {}

  boasVindas(): Observable<Mensagem> {
    return this.http.get<Mensagem>(this.url)
  }

}
