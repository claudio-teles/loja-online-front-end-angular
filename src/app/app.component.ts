import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageServiceService } from './home-page-service.service';
import { Mensagem } from './mensagem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  mensagemDeBoasVindas: string
  
  constructor(public router: Router, private homePage: HomePageServiceService) {}
  
  nomeDoCliente = 'Olá! Faça o login para adicionar itens ao carrinho de compras.';
  menuDeNavegacao;
 

    ngOnInit() {
      
    }
    
  }
