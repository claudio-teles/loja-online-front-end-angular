import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerCarrinhoService } from './ver-carrinho.service';

@Component({
  selector: 'app-carrinho-de-compras',
  templateUrl: './carrinho-de-compras.component.html',
  styleUrls: ['./carrinho-de-compras.component.css']
})
export class CarrinhoDeComprasComponent implements OnInit {
  
  id_carrinho_de_compras: any
  produtos: any[] = []
  
  constructor(private rota: Router, private produtosDalista: VerCarrinhoService) {
    this.produtos = this.produtosDalista.mostrarProdutos();
  }
  
  ngOnInit() {
    this.id_carrinho_de_compras = this.rota.url.substr(this.rota.url.lastIndexOf('/')+1, this.rota.url.length)
    console.log('Console.log: '+this.rota.url)
  }
  
}
