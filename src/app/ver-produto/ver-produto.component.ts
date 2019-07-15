import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerProdutoService } from './ver-produto.service';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {
  
  id_carrinho_de_compras: any
  produto: {}
  
  constructor(private rota: Router, private verProduto: VerProdutoService) {}
  
  /*   Executar o projeto Back End, loja_online_back_end_spring do github: 
  https://github.com/claudio-teles/loja_online_back_end_spring.git */
  ngOnInit() {
    this.verProduto.VerUmProduto()
      .subscribe(
        respostaDoServidorTomcat => {
          this.produto = respostaDoServidorTomcat
        }
      )
  }
  
}
