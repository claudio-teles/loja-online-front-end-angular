import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {
  
  id_carrinho_de_compras: any
  produto: {}
  
  constructor(private rota: Router) {
    
    this.produto = {
      
      "idProduto": 34,
      "codigoBarra": 31524306,
      "nomeProduto": "Relógio Bluetooth Smartwatch Pressão Sanguínea, Batimentos Cardíacos H09s Cavo Preto/Cinza",
      "valorProduto": 355.91,
      "quantidadeProduto": "75",
      "marca": "BR4 Comercio",
      "descricao": "Bateria Capacidade: 70mAh \nTempo carregando: Média 90 minutos carga completa **Tomada 5volts*** carregador celular \nStandby time: 3 a 5 dias\nMaterial da Pulseira: Borracha conforme modelo\nCompatível com : Android 4.4 e IOS 8.0 e acima \nH band ou H Band2.0",
      "garantia": 1,
      "avaliacao": "Preço atrativo para quem procura um smartwatch com medição de pressão sanguínea com boa precisão, é ótimo. Não chama a atenção e possui todas as funções para prática esportiva e ainda marca horas. Já quem quer um que substitua o smatphone.",
      "curtiu": "6",
      "naoCurtiu": "1",
      "imagemDoProduto": {
        "idImagem": 34,
        "localDaImagem": "https://images-submarino.b2w.io/produtos/01/00/oferta/31524/3/31524311_1GG.jpg"
      }
    }
    
  }
  
  ngOnInit() {
    this.id_carrinho_de_compras = 3
    console.log('Console.log: '+this.rota.url)
  }
  
}
