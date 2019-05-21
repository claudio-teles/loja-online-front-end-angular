import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {
  
  id: any
  subscricao: Subscription
  produtos: any[] = []
  
  constructor(
    private sanitizer: DomSanitizer,
    private rota: Router
    ) {
    
    this.produtos = [
      
      {
        idProduto: 1,
        codigoBarra: 88846285,
        nomeProduto: 'AirPod',
        valorProduto: 1299,
        marca: 'Apple',
        descricao: 'Usar os AirPods sempre foi uma experiência diferente de qualquer outro fone de ouvido sem fio.',
        garantia: 1,
        avaliacao: 'O produto é bonito, a qualidade do som é boa e apenas a duração da bateria poderia ser melhor.\nMarcelo-Limma',
        curtiu: 18,
        naoCurtiu: 3,
        imagemDoProduto: {
          idImagem: 1,
          localDaImagem: sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/13VfCgiPriKRKLQGm9wFsQCk4TmqimgWy/preview')
        }
      },
      {
        idProduto: 2,
        codigoBarra: 789855200,
        nomeProduto: 'Celular Alcatel Pixi 4\n Lite 4034e Preto - 3g, \nDual Chip, Tela 4\", 8gb, \nCâmera 8mp E 5mp.',
        valorProduto: 348,
        marca: 'Alcatel',
        descricao: 'O smartphone Alcatel Pixi 4: processamento quad core de 1.3 GHz e um design extremamente confortável. Bonito, sistema operacional Android 6.0 marshmallow, resolução é a WVGA com 800 x 480 pixels. possui uma câmera traseira com 8MP e flash integrado.',
        garantia: 1,
        avaliacao: '',
        curtiu: 5,
        naoCurtiu: 0,
        imagemDoProduto: {
          idImagem: 1,
          localDaImagem: sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1Jngqc5B7tUotJ2PwiqD1qlmcCvriSdjD/preview')
        }
      },
      {
        idProduto: 3,
        codigoBarra: 132978705,
        nomeProduto: 'Computador All In One Positivo UD3630 Intel Dual Core 4GB 32GB SSD LED 18.5\" Branco - Windows 10',
        valorProduto: 1349.99,
        marca: 'Positivo',
        descricao: 'Positivo N3060 é a união perfeita entre a tela LED Full HD e a CPU, que proporciona mais facilidade e economia de espaço. Equipado com o que a de mais moderno, é uma excelente opção para trabalhar, navegar na internet e jogar jogos.',
        garantia: 2,
        avaliacao: '32 GB de armazenamento só serve para o sistema operacional. Não dá para guardar nada. Este computador é mais uma televisão para assistir youtube do que para trabalhar.',
        curtiu: 12,
        naoCurtiu: 3,
        imagemDoProduto: {
          idImagem: 3,
          localDaImagem: sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1JBdKwDJBVAcZWyY05UOW2n4LkV-ryOvq/preview')
        }
      },
      {
        idProduto: 4,
        codigoBarra: 54290793,
        nomeProduto: 'Computador All In One 3green Unique Intel Core I3 4gb HD 1tb 24.5\" Ajuste Rotação E Altura.',
        valorProduto: 2479,
        marca: 'Unique',
        descricao: 'Unique\nAssim será a sua experiência com o nosso All in One Premium. Conheça os atributos dessa linha e confirme, ele é único!\n\nVamos começar pela experiência visual\nCom uma tela Full Hd de 24\" com 2ms.',
        garantia: 3,
        avaliacao: 'Ótimo produto.',
        curtiu: 1,
        naoCurtiu: 0,
        imagemDoProduto: {
          idImagem: 4,
          localDaImagem: sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1ANEX42j6tSBQVGslgc4CG0gZPE36ud1o/preview')
        }
      },
      {
        idProduto: 5,
        codigoBarra: 19019850,
        nomeProduto: 'Apple Watch Series 3 GPS com Pulseira Esportiva Cinza e Preto - 38 mm.',
        valorProduto: 1659,
        marca: 'Apple',
        descricao: 'GPS, alímetro, música, feito para nadar, app exercício, motivação inteligente, compartilhamento de atividade, app batimentos, app respirar, app de terceiros para saúde, app saúde no iPhone, chamdas e mensagens, siri, mostradores, notificaçoes e apps.',
        garantia: 1,
        avaliacao: 'Produto maravilhoso! Chegou dentro do prazo! Superou minhas expectativas!!!!',
        curtiu: 5,
        naoCurtiu: 1,
        imagemDoProduto: {
          idImagem: 5,
          localDaImagem: sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1OXE3z-zHWGd91r-Ln6tENeyvsDZzcqMZ/preview')
        }
      },
      {
        idProduto: 6,
        codigoBarra: 45001721,
        nomeProduto: 'Câmera 360º V1 Degree HD 16mp Wifi 0.96\" - Branco',
        valorProduto: 437.86,
        marca: 'FP Imports',
        descricao: 'Câmera 360º V1 Degree HD 16MP Wifi 0.96\" - Branco',
        garantia: 1,
        avaliacao: '',
        curtiu: 0,
        naoCurtiu: 0,
        imagemDoProduto: {
          idImagem: 6,
          localDaImagem: sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1LYr8HE4ELjajLxIqea4y0svMHDZdARVw/preview')
        }
      },
      {
        idProduto: 7,
        codigoBarra: 35608909,
        nomeProduto: 'Câmera Samsung Gear 360° SM-R210 Branco',
        valorProduto: 998.2,
        marca: 'Samsung',
        descricao: 'O Gear 360 evoluiu para lhe permitir gravar em 4K ou transmitir em vivo. \nVisão completa de 360 do mundo ao seu redor com Gear 360, os recursos de vídeo real de 4K lhe garante vídeos e imagens nítidos.',
        garantia: 1,
        avaliacao: 'Muito legal essa câmera amei muito nem imaginei que essa câmera fizesse tudo que ela faz muito excelente',
        curtiu: 1,
        naoCurtiu: 0,
        imagemDoProduto: {
          idImagem: 7,
          localDaImagem: sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1SzQFewJS_NOrvwzh1G4hFgH1cDFDZWMG/preview')
        }
      },
      {
        idProduto: 8,
        codigoBarra: 695220228,
        nomeProduto: 'Carregador Portátil Power Bank Pineng Pn-951 Slim 10000 mah',
        valorProduto: 36.9,
        marca: 'Kavika LED',
        descricao: '-Agite para começar a carregar.\n-Usa bateria de polímero de lítio para torna-lo mais fino banco de potência.\n-Compatível: tablet, MP3, MP4, PSP, GPS, dispositivo de jogos, câmera e muitos mais basta conectar com o cabo USB.\n- Entrada: Micro USB/DC 5V/2ª',
        garantia: 1,
        avaliacao: 'Não faz uma carga completa no meu aparelho de 3000mAh, absurdo pois diz ser 10000mAh.\nSthaycy\nesta avaliação foi útil?\n',
        curtiu: 3,
        naoCurtiu: 1,
        imagemDoProduto: {
          idImagem: 8,
          localDaImagem: sanitizer.bypassSecurityTrustResourceUrl('https://drive.google.com/file/d/1UN7-7ZGL_IcgUizxpvqtOjplAft71pIo/preview')
        }
      }
      
    ]
    
  }
  
  ngOnInit() {
    this.id =  this.rota.url.substr(this.rota.url.length - 1, this.rota.url.length)
  }
  
}
