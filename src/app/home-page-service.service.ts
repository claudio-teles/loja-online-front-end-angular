import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {

  mensagemDeBoasVindas = '';

  constructor() {}

  boasVindas() {
    this.mensagemDeBoasVindas = 'Loja Online';
    return this.mensagemDeBoasVindas;
  }

}
