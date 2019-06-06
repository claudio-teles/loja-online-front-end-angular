import { Component, OnInit } from '@angular/core';
import { ItensVistosService } from './itens-vistos.service';

@Component({
  selector: 'app-itens-mais-vistos',
  templateUrl: './itens-mais-vistos.component.html',
  styleUrls: ['./itens-mais-vistos.component.css']
})
export class ItensMaisVistosComponent implements OnInit {
  
  produtos: any[] = []
  
  constructor(private maisVendidos: ItensVistosService) {
    this.produtos = this.maisVendidos.mostrarListaProdutosMaisVistos();
  }
  
  ngOnInit() {
  }
  
}
