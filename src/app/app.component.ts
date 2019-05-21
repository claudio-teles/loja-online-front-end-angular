import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) {}

  mensagemDeBoasVindas = 'Bem vindo a Loja Online feita com Angular e Spring';
  nomeDoCliente = 'Olá! Faça o login para adicionar itens ao carrinho de compras.';
  menuDeNavegacao;

}
