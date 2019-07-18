import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {

  private url: string = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  boasVindas(): Observable<Response> {
    return this.http.get<Response>(this.url)
  }

}
