import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  
  produtosDoEstoque: any[] = []
  
  constructor() {}
  
  mostrarEstoque() {
    return this.produtosDoEstoque = [
      {
        "idProduto": 7,
        "codigoBarra": 35608909,
        "nomeProduto": "Câmera Samsung Gear 360° SM-R210 Branco",
        "valorProduto": 998.2,
        "quantidadeProduto": "12",
        "marca": "Samsung",
        "descricao": "O Gear 360 evoluiu para lhe permitir gravar em 4K ou transmitir em vivo. \nVisão completa de 360 do mundo ao seu redor com Gear 360, os recursos de vídeo real de 4K lhe garante vídeos e imagens nítidos.",
        "garantia": 1,
        "avaliacao": "Muito legal essa câmera amei muito nem imaginei que essa câmera fizesse tudo que ela faz muito excelente",
        "curtiu": "1",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 7,
          "localDaImagem": "https://images.samsung.com/is/image/samsung/br-gear-360-2017-sm-r210nzwazto-keywhite-61736821?$PD_GALLERY_L_JPG$"
        }
      },
      {
        "idProduto": 3,
        "codigoBarra": 132978705,
        "nomeProduto": "Computador All In One Positivo UD3630 Intel Dual Core 4GB 32GB SSD LED 18.5\" Branco - Windows 10",
        "valorProduto": 1349.99,
        "quantidadeProduto": "95",
        "marca": "Positivo",
        "descricao": "Positivo N3060 é a união perfeita entre a tela LED Full HD e a CPU, que proporciona mais facilidade e economia de espaço. Equipado com o que a de mais moderno, é uma excelente opção para trabalhar, navegar na internet e jogar jogos.",
        "garantia": 2,
        "avaliacao": "32 GB de armazenamento só serve para o sistema operacional. Não dá para guardar nada. Este computador é mais uma televisão para assistir youtube do que para trabalhar.",
        "curtiu": "12",
        "naoCurtiu": "3",
        "imagemDoProduto": {
          "idImagem": 3,
          "localDaImagem": "https://loja.meupositivo.com.br/Assets/Produtos/Gigantes/aio2.jpg?v=f07605d3-1"
        }
      },
      {
        "idProduto": 1,
        "codigoBarra": 88846285,
        "nomeProduto": "AirPod",
        "valorProduto": 1299,
        "quantidadeProduto": "350",
        "marca": "Apple",
        "descricao": "Usar os AirPods sempre foi uma experiência diferente de qualquer outro fone de ouvido sem fio.",
        "garantia": 1,
        "avaliacao": "O produto é bonito, a qualidade do som é boa e apenas a duração da bateria poderia ser melhor.\nMarcelo-Limma",
        "curtiu": "18",
        "naoCurtiu": "3",
        "imagemDoProduto": {
          "idImagem": 1,
          "localDaImagem": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/a/ir/airpods/wireless/airpods-wireless-charge-case-201903?wid=300&hei=390&fmt=png-alpha&qlt=80&.v=1551389040514"
        }
      },
      {
        "idProduto": 48,
        "codigoBarra": 124566196,
        "nomeProduto": "Smartphone Sony Xperia Z5 Android 5.1 Tela 5.2\" 32GB 4G Câmera 23MP - Preto",
        "valorProduto": 1359,
        "quantidadeProduto": "40",
        "marca": "Sony",
        "descricao": "Smartphone Sony Xperia Z5 Android 5.1 Tela 5.2\" 32GB 4G Câmera 23MP - Preto",
        "garantia": 1,
        "avaliacao": "O meu ja tem mais de um ano de uso,nunca travou não tenho nada pra reclamar,simplesmente encantada com a qualidade. E ja estou pensando em comprar outro aparelho do mesmo modelo! Rsrsrs Eu gostei muitooo!",
        "curtiu": "5",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 48,
          "localDaImagem": "https://images-shoptime.b2w.io/produtos/01/00/item/124566/1/124566196_2GG.jpg"
        }
      },
      {
        "idProduto": 54,
        "codigoBarra": 55829221,
        "nomeProduto": "Smartphone Asus Zenfone 5z 256gb 8gb Android 8.0 Tela 6,2\" Snapdragon 2,8ghz 4g Câmera Dual 12mp+8mp Prata",
        "valorProduto": 3899,
        "quantidadeProduto": "500",
        "marca": "Zenfone",
        "descricao": "Asus ZenFone 5Z 8GB/256GB Prata Tela: 6,2\\\" Fhd+ Câmera: Dual: 12MP + 8MP / 8 Mp Memória: 256 Gb / 8 Gb Conectividade: 4G - Câmera dupla com Inteligência Artificial; - Qualcomm® Snapdragon 845,Tela de 6,2 e proporção de 19:9.",
        "garantia": 1,
        "avaliacao": "",
        "curtiu": "8",
        "naoCurtiu": "2",
        "imagemDoProduto": {
          "idImagem": 54,
          "localDaImagem": "https://d3emhpm0gj0nik.cloudfront.net/media/catalog/product/cache/2/image/700x700/9df78eab33525d08d6e5fb8d27136e95/a/s/asus_8gb_256gb_ag_1_4_1005621_9912_236_12969_6_20180921104722.jpg"
        }
      },
      {
        "idProduto": 47,
        "codigoBarra": 116236269,
        "nomeProduto": "Som Portátil Mondial com Entradas USB/Auxiliar, Rádio FM, Sintonia Digital - NBX-06",
        "valorProduto": 89.9,
        "quantidadeProduto": "180",
        "marca": "Mondial",
        "descricao": "O NBX-06 ainda conta com rádio Fm estéreo com entrada USB e entrada auxiliar, sintonia digital, MP3 Link, seis níveis de equalização e 3,4 W de potência RMS.",
        "garantia": 1,
        "avaliacao": "Estou gostando muito, sintoniza as estações muito bem, está funcionando perfeitamente.",
        "curtiu": "0",
        "naoCurtiu": "3",
        "imagemDoProduto": {
          "idImagem": 47,
          "localDaImagem": "https://a-static.mlcdn.com.br/618x463/radio-boombox-nbx-06-entradas-usb-e-auxiliar-radio-fm-mp3-player-display-digital-3-4w-rms-mondial/efacil/159442/955d6f907195e2b2482dc07a3b4713aa.jpg"
        }
      },
      {
        "idProduto": 12,
        "codigoBarra": 120585883,
        "nomeProduto": "Fone de Ouvido ONeill Philips - SHO3300ESCAP/00 Azul e Verde",
        "valorProduto": 159.99,
        "quantidadeProduto": "90",
        "marca": "Philips",
        "descricao": "Com estes Fones de Ouvido , da Philips, você tem flexibilidade de ajustes que propiciam excelente encaixe e uso confortável para você na hora de viajar ou naqueles momentos de tranquilidade no trabalho.",
        "garantia": 1,
        "avaliacao": "",
        "curtiu": "12",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 12,
          "localDaImagem": "https://images-americanas.b2w.io/produtos/01/00/item/120585/8/120585883_1GG.jpg"
        }
      },
      {
        "idProduto": 25,
        "codigoBarra": 132530759,
        "nomeProduto": "Óculos 3D Gear VR + Controle - Samsung",
        "valorProduto": 499,
        "quantidadeProduto": "210",
        "marca": "Samsung",
        "descricao": "Dispositivo para projeção de imagens de realidade virtual em 3D. Controle incluso que permite melhor experiência de game, melhor controle e interação das atividades.",
        "garantia": 0,
        "avaliacao": "O produto é simples, deve ser encarado como utilitário, e não vai ser algo surpreendente, mas é um bom entretenimento. Achei o preço é acima do justo, pelo que ele entrega, mas ainda vale a pena para diversificar a utilidade do celular.",
        "curtiu": "0",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 25,
          "localDaImagem": "https://www.pontofrio-imagens.com.br/TelefoneseCelulares/AcessoriosparaCelulares/oculos-realidade-virtual/7417622/334392349/oculos-de-realidade-virtual-samsung-gear-vr-branco-7417622.jpg"
        }
      },
      {
        "idProduto": 31,
        "codigoBarra": 122423925,
        "nomeProduto": "Rádio Portátil Toshiba Multibanda TR 849 Rádio AM/FM Entrada USB - Chumbo",
        "valorProduto": 155,
        "quantidadeProduto": "100",
        "marca": "Semp Toshiba",
        "descricao": "O Rádio Portátil Toshiba Multibanda TR 849 é leve, fácil de carregar, possui alça para transporte e funciona com energia elétrica ou pilhas.\nO Multibanda TR 849 conta com 8 faixas, conectar seu pendrive na entrada USB e ouvir suas músicas favoritas.\n",
        "garantia": 1,
        "avaliacao": "A sintonia das estações são muito bem obtidas, tem um som muito bom, além de ter entrada USB. Se for levar em consideração seus atributos seu custo está barato. Recomendo.",
        "curtiu": "5",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 31,
          "localDaImagem": "https://images-shoptime.b2w.io/produtos/01/00/item/122423/9/122423925_1GG.jpg"
        }
      },
      {
        "idProduto": 18,
        "codigoBarra": 134186306,
        "nomeProduto": "Smartphone Motorola Moto G7 Plus 64GB Dual Chip Android Pie - 9.0 Tela 6.3\" 1.8 GHz Octa-Core 4G Câmera 16MP F1.7 + 5MP F1.9 (Dual Cam) - Rubi",
        "valorProduto": 1899,
        "quantidadeProduto": "390",
        "marca": "Motorola",
        "descricao": "Smartphone Motorola Moto G7 Plus 64GB Dual Chip Android Pie - 9.0 Tela 6.3\" 1.8 GHz Octa-Core 4G Câmera 16MP F1.7 + 5MP F1.9 (Dual Cam) - Rubi",
        "garantia": 2,
        "avaliacao": "Ótima qualidade, ótimo preço, chegou certinho, na data marcada",
        "curtiu": "4",
        "naoCurtiu": "3",
        "imagemDoProduto": {
          "idImagem": 18,
          "localDaImagem": "https://images-submarino.b2w.io/produtos/01/00/offers/01/00/item/134186/2/134186285_1GG.jpg"
        }
      }
    ]
  }
  
}
