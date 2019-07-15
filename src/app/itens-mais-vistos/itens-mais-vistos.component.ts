import { Component, OnInit } from '@angular/core';
import { ItensVistosService } from './itens-vistos.service';
import { Itens } from './Itens';

@Component({
  selector: 'app-itens-mais-vistos',
  templateUrl: './itens-mais-vistos.component.html',
  styleUrls: ['./itens-mais-vistos.component.css']
})
export class ItensMaisVistosComponent implements OnInit {
  
  itens: Itens[]
  
  constructor(private maisVendidos: ItensVistosService) {}

  /*   Executar o projeto Back End, loja_online_back_end_spring do github: 
  https://github.com/claudio-teles/loja_online_back_end_spring.git */
  ngOnInit() {
    this.maisVendidos.mostrarListaProdutosMaisVistos()
      .subscribe(
        respostaDoServidorTomcat => {
          this.itens = respostaDoServidorTomcat
        }
      )
  }
  
}
