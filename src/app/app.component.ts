import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageServiceService } from './home-page-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router, private homePage: HomePageServiceService) {}

  mensagemDeBoasVindas = this.homePage.boasVindas();
  nomeDoCliente = 'Olá! Faça o login para adicionar itens ao carrinho de compras.';
  menuDeNavegacao;

}
