import { Component, OnInit } from '@angular/core';
import { ListaDeProdutosService } from './lista-de-produtos.service';
import { Produtos } from './Produtos';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {
  
  produtos: Produtos[];
  
  constructor(private produtosService: ListaDeProdutosService) {}
  
  ngOnInit() {
    this.produtosService.listarProdutosEmEstoque()
      .subscribe(
        resposta => {
          this.produtos = resposta
        }
      )
  }
  
}
