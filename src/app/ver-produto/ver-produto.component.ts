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
  
  constructor(private rota: Router, private verProduto: VerProdutoService) {
    
    this.produto = this.verProduto.VerUmProduto();
    
  }
  
  ngOnInit() {
    this.id_carrinho_de_compras = 3
    console.log('Console.log: '+this.rota.url)
  }
  
}
