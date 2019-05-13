import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensagemDeBoasVindas = 'Bem vindo a Loja Online feita com Angular e Spring';
  nomeDoCliente = 'Olá! Faça o login para adicionar itens ao carrinho de compras.'
}
