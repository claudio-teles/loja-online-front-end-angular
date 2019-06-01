import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens-mais-vistos',
  templateUrl: './itens-mais-vistos.component.html',
  styleUrls: ['./itens-mais-vistos.component.css']
})
export class ItensMaisVistosComponent implements OnInit {
  
  produtos: any[] = []
  
  constructor() {
    this.produtos = [
      {
        "idProduto": 26,
        "codigoBarra": 39970929,
        "nomeProduto": "Oculos Vr Box Realidade Virtual 3d + Controle bluetooth",
        "valorProduto": 38.7,
        "quantidadeProduto": "65",
        "marca": "Olist",
        "descricao": "Itens Inclusos: \n1 X jogo caixa 3d vr realidade virtual óculos \n1 X manual do usuário \n1 X controlador remoto bluetooth (aanto para ios e android)",
        "garantia": 1,
        "avaliacao": "Comprei prós meus filhos e eles gostaram muito. O produto cumpre o que promete",
        "curtiu": "10",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 26,
          "localDaImagem": "https://images-shoptime.b2w.io/produtos/01/00/oferta/39525/7/39525799_1GG.jpg"
        }
      },
      {
        "idProduto": 38,
        "codigoBarra": 133274700,
        "nomeProduto": "Smartphone Samsung Galaxy S9 Dual Chip Android 8.0 Tela 5.8\" Octa-Core 2.8GHz 128GB 4G Câmera 12MP - Preto",
        "valorProduto": 2699,
        "quantidadeProduto": "1000",
        "marca": "Samsung",
        "descricao": "Smartphone Samsung Galaxy S9 Dual Chip Android 8.0 Tela 5.8\" Octa-Core 2.8GHz 128GB 4G Câmera 12MP - Preto",
        "garantia": 1,
        "avaliacao": "O aparelho em si é muito bom, só não gostei da qualidade do som do fone é muito agudo e não destaca bem os graves , o meu anterior era o S7 com fone da própria Samsung e a qualidade do grave é muito melhor.",
        "curtiu": "9",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 38,
          "localDaImagem": "https://images.samsung.com/is/image/samsung/br-galaxy-s9-sm-g960-sm-g9600zbkzto-lblue-108109026?$PD_GALLERY_PNG$"
        }
      },
      {
        "idProduto": 14,
        "codigoBarra": 125540588,
        "nomeProduto": "Home Theater DVD Upscalling Full HD LG LHD625 1000W 5.1 Canais Bluetooth USB Direct Recording",
        "valorProduto": 819.9,
        "quantidadeProduto": "50",
        "marca": "LG",
        "descricao": "DVD (NTSC / PAL /-R / -RW /+R / +RW); Audio CD; CD-R / CD-RW; MPEG2; Xvid; Áudio; Dolby Digital; WMA; MP3 / ID3 Tag; MPEG ½ L2",
        "garantia": 1,
        "avaliacao": "Melhor do que esperava...................................",
        "curtiu": "9",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 14,
          "localDaImagem": "https://images-americanas.b2w.io/produtos/01/00/item/125540/5/125540588_1GG.jpg"
        }
      },
      {
        "idProduto": 19,
        "codigoBarra": 52520918,
        "nomeProduto": "Notebook 2 Em 1 Dell Inspiron I14-5481-m10 8ª Geração Intel Core I3 4gb 1tb Led 14\" HD Touch Bivolt",
        "valorProduto": 2759,
        "quantidadeProduto": "215",
        "marca": "Dell",
        "descricao": "1 porta USB 3.1, 1 porta USB 3.1 com Power Share, 1 porta USB 2.0, 1 porta HDMI 1.4b, 1 porta combinada para fones de ouvido e microfone | Leitor de cartão de mídia: 3 em 1 (SD, SDHC e SDXC)",
        "garantia": 1,
        "avaliacao": "É bonito, porém travou muito desde o primeiro dia. O valor não faz jus ao computador.",
        "curtiu": "5",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 19,
          "localDaImagem": "https://images-americanas.b2w.io/produtos/01/00/oferta/52520/9/52520921_4GG.jpg"
        }
      },
      {
        "idProduto": 11,
        "codigoBarra": 27953869,
        "nomeProduto": "Fone de Ouvido Bluetooth Motorola Pulse Escape com Microfone e Controles Touch - Preto",
        "valorProduto": 179.8,
        "quantidadeProduto": "110",
        "marca": "Japão Shop",
        "descricao": "Fones de Ouvido Bluetooth da Motorola Pulse Escape O Pulse Escape oferece desempenho de qualidade de estúdio e liberdade sem fio. Poderosos drivers de 40mm e isolamento de ruído fornecem excelente som.",
        "garantia": 1,
        "avaliacao": "Tem um som muito bom para seu preço e uso todos os dias da semana no trabalho para manter minha concentração. A bateria aguenta 3 dias no trabalho. MAS logo depois de 9 meses de uso diário, a haste dele bem no ponto de dobra quebrou de um lado.",
        "curtiu": "0",
        "naoCurtiu": "3",
        "imagemDoProduto": {
          "idImagem": 11,
          "localDaImagem": "https://m.media-amazon.com/images/I/5116Mpd+wWL._AC_UL436_.jpg"
        }
      },
      {
        "idProduto": 17,
        "codigoBarra": 132458304,
        "nomeProduto": "Mini System LG Cj44 Xboom - 440w",
        "valorProduto": 699.99,
        "quantidadeProduto": "70",
        "marca": "LG",
        "descricao": "O novo Mini System LG X Boom CJ44 têm 440W de potência e design inspirado em uma mesa de DJ para deixar sua casa parecendo uma festa. O produto também é perfeito para ouvir as músicas do seu Smartphone.",
        "garantia": 1,
        "avaliacao": "Otimo aparelho muito potenteeeeeee a entrega 5 dias apos a compra. Pode comprar sem medo muito bommmmmmmmmmm",
        "curtiu": "13",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 17,
          "localDaImagem": "https://www.casasbahia-imagens.com.br/audio/MicroeMiniSystem/11548163/842670083/mini-system-lg-cj44-xboom-dual-usb-funcao-karaoke-440w-11548163.jpg"
        }
      },
      {
        "idProduto": 29,
        "codigoBarra": 133299704,
        "nomeProduto": "PC Gamer Acer Aspire GX-783-BR13 Intel Core i7 16GB (GeForce GTX 1060 com 6GB) 1TB Windows 10 - Preto",
        "valorProduto": 4918.99,
        "quantidadeProduto": "50",
        "marca": "Acer",
        "descricao": "PC Gamer Acer Aspire GX-783-BR13 Intel Core i7 16GB (GeForce GTX 1060 com 6GB) 1TB Windows 10 - Preto",
        "garantia": 1,
        "avaliacao": "PC Gamer Acer Aspire GX-783-BR13, excelente produto e ótimo desempenho.",
        "curtiu": "0",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 29,
          "localDaImagem": "https://www.pontofrio-imagens.com.br/Informatica/Computadores/15074493/1100866060/desktop-gamer-acer-aspire-gx-783-br13-intel-core-i7-16gb-1tb-hd-8gb-ssd-gtx-1060-6gb-windows-10-15074493.jpg"
        }
      },
      {
        "idProduto": 52,
        "codigoBarra": 132738883,
        "nomeProduto": "Apple Watch Series 3 GPS com Pulseira Esportiva Cinza e Preto - 42 mm",
        "valorProduto": 1697,
        "quantidadeProduto": "500",
        "marca": "Apple",
        "descricao": "GPS, alímetro, música, feito para nadar, app exercício, motivação inteligente.",
        "garantia": 1,
        "avaliacao": "Chegou aproximadamente 07 dias antes do prazo final. Ótimo relógio para o dia a dia, desde o trabalho à exercícios fisícos. Ótimo produto.",
        "curtiu": "8",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 52,
          "localDaImagem": "https://images-submarino.b2w.io/produtos/01/00/item/132738/8/132738883_1GG.jpg"
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
        "idProduto": 44,
        "codigoBarra": 122701411,
        "nomeProduto": "Smart TV LED 32\" Samsung 32J4300 HD com Conversor Digital 2 HDMI 1 USB Wi-Fi 120Hz",
        "valorProduto": 1169,
        "quantidadeProduto": "300",
        "marca": "Samsung",
        "descricao": "Smart TV LED 32\" Samsung 32J4300 HD com Conversor Digital 2 HDMI 1 USB Wi-Fi 120Hz",
        "garantia": 1,
        "avaliacao": "DEMORA MUITO CONECTAR A INTERNET,E NÃO RESPONDE AO COMANDO RAPIDO DO CONTROLE REMOTO.",
        "curtiu": "0",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 44,
          "localDaImagem": "https://a-static.mlcdn.com.br/180x200/smart-tv-led-32-samsung-un32j4300-wi-fi-conversor-digital-2-hdmi-1-usb/magazineluiza/193365700/19991cfaea3d86d85500c691ebf0146b.jpg"
        }
      }
    ]
    
  }
  
  ngOnInit() {
  }
  
}
