import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {
  
  produtos: any[] = []
  
  constructor() {
    
    this.produtos = [
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
        "idProduto": 2,
        "codigoBarra": 789855200,
        "nomeProduto": "Celular Alcatel Pixi 4 Lite 4034e Preto - 3g, Dual Chip, Tela 4\", 8gb, Câmera 8mp E 5mp.",
        "valorProduto": 348,
        "quantidadeProduto": "280",
        "marca": "Alcatel",
        "descricao": "O smartphone Alcatel Pixi 4: processamento quad core de 1.3 GHz e um design extremamente confortável. Bonito, sistema operacional Android 6.0 marshmallow, resolução é a WVGA com 800 x 480 pixels. possui uma câmera traseira com 8MP e flash integrado.",
        "garantia": 1,
        "avaliacao": "",
        "curtiu": "5",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 2,
          "localDaImagem": "https://images-americanas.b2w.io/produtos/01/00/oferta/27173/4/27173461_1GG.jpg"
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
        "idProduto": 4,
        "codigoBarra": 54290793,
        "nomeProduto": "Computador All In One 3green Unique Intel Core I3 4gb HD 1tb 24.5\" Ajuste Rotação E Altura.",
        "valorProduto": 2479,
        "quantidadeProduto": "130",
        "marca": "Unique",
        "descricao": "Unique\nAssim será a sua experiência com o nosso All in One Premium. Conheça os atributos dessa linha e confirme, ele é único!\nVamos começar pela experiência visual\nCom uma tela Full Hd de 24\" com 2ms.",
        "garantia": 3,
        "avaliacao": "Ótimo produto.",
        "curtiu": "1",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 4,
          "localDaImagem": "https://images-shoptime.b2w.io/produtos/01/00/oferta/54290/7/54290796_1GG.jpg"
        }
      },
      {
        "idProduto": 5,
        "codigoBarra": 19019850,
        "nomeProduto": "Apple Watch Series 3 GPS com Pulseira Esportiva Cinza e Preto - 38 mm.",
        "valorProduto": 1659,
        "quantidadeProduto": "55",
        "marca": "Apple",
        "descricao": "GPS, alímetro, música, feito para nadar, app exercício, motivação inteligente, compartilhamento de atividade, app batimentos, app respirar, app de terceiros para saúde, app saúde no iPhone, chamdas e mensagens, siri, mostradores, notificaçoes e apps.",
        "garantia": 1,
        "avaliacao": "Produto maravilhoso! Chegou dentro do prazo! Superou minhas expectativas!!!!",
        "curtiu": "5",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 5,
          "localDaImagem": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/3/8/38/alu/38-alu-space-sport-black-nc-1up_GEO_BR?wid=470&hei=556&fmt=png-alpha&.v=1536108995001"
        }
      },
      {
        "idProduto": 6,
        "codigoBarra": 45001721,
        "nomeProduto": "Câmera 360º V1 Degree HD 16mp Wifi 0.96\" - Branco",
        "valorProduto": 437.86,
        "quantidadeProduto": "55",
        "marca": "FP Imports",
        "descricao": "Câmera 360º V1 Degree HD 16MP Wifi 0.96\" - Branco",
        "garantia": 1,
        "avaliacao": "",
        "curtiu": "0",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 6,
          "localDaImagem": "https://images-shoptime.b2w.io/produtos/01/00/oferta/39804/5/39804574_1GG.jpg"
        }
      },
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
        "idProduto": 8,
        "codigoBarra": 695220228,
        "nomeProduto": "Carregador Portátil Power Bank Pineng Pn-951 Slim 10000 mah",
        "valorProduto": 36.9,
        "quantidadeProduto": "25",
        "marca": "Kavika LED",
        "descricao": "-Agite para começar a carregar.\n-Usa bateria de polímero de lítio para torna-lo mais fino banco de potência.\n-Compatível: tablet, MP3, MP4, PSP, GPS, dispositivo de jogos, câmera e muitos mais basta conectar com o cabo USB.\n- Entrada: Micro USB/DC 5V/2ª",
        "garantia": 1,
        "avaliacao": "Não faz uma carga completa no meu aparelho de 3000mAh, absurdo pois diz ser 10000mAh.\nSthaycy\nesta avaliação foi útil?\n",
        "curtiu": "3",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 8,
          "localDaImagem": "https://images-na.ssl-images-amazon.com/images/I/41hkHlRburL.jpg"
        }
      },
      {
        "idProduto": 9,
        "codigoBarra": 13331803,
        "nomeProduto": "Computador Completo com Monitor LED 15.6\" 3green Intel Dual Core 2.41ghz 4GB HD 500GB",
        "valorProduto": 1190,
        "quantidadeProduto": "35",
        "marca": "World PC",
        "descricao": "Painel 15.6 widescreen Led\nTamanho imagem visível 34,43cmx19,35cm\nResolução máxima 1366x768 60hz\nSuporte de cores: maior que 26 milhões\nDot Pitch 0,252mm\nBrilho 250cd/m2\nRelação do contraste: 500:1\nTempo de resposta: 8ms",
        "garantia": 1,
        "avaliacao": "Muito ruim, só esperou passar a garantia para quebrar de vez.",
        "curtiu": "3",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 9,
          "localDaImagem": "https://images-shoptime.b2w.io/produtos/01/00/oferta/13331/8/13331806_1GG.jpg"
        }
      },
      {
        "idProduto": 10,
        "codigoBarra": 46917582,
        "nomeProduto": "Computador Com Monitor 19.5\" Led Corpc Intel Core I3 6gb HD 500gb Wifi",
        "valorProduto": 1490,
        "quantidadeProduto": "45",
        "marca": "World PC",
        "descricao": "Monitor de Led com 19.5\" Hd\nBrilho: 200 cd\nTempo de resposta: 5 ms\nResolução máxima / recomendada: 1366 x 768 60 Hz (Hd)\nSuporte de cores: Maior que 16 milhões\nConexão: Vga",
        "garantia": 1,
        "avaliacao": "FIZ A COMPRA CERTA , ERA EXATAMENTE O QUE EU TAVA PRECISANDO , ENTREGA RÁPIDA , ÓTIMO CUSTO... E ATE AGORA TUDO CERTO , QUER CONTINUE ASSIM !!",
        "curtiu": "7",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 10,
          "localDaImagem": "https://www.casasbahia-imagens.com.br/Informatica/Computadores/14147609/1051932845/computador-com-monitor-156-quot-led-corpc-intel-core-i3-6gb-hd-500gb-wifi-14147609.jpg"
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
        "idProduto": 13,
        "codigoBarra": 15736647,
        "nomeProduto": "Headphone Sony MDR-XB650BT,Azul, Bluetooth e NFC Extra Bass,Reforço de Graves Fone de Ouvido",
        "valorProduto": 563.27,
        "quantidadeProduto": "115",
        "marca": "Sony",
        "descricao": "Tecnologia Extra Bass que realça as frequências mais baixas para obter sons graves mais profundos Basta um toque: Ouça as suas musicas favoritas do celular rapidamente, basta tocar o seu smartphone NFC no headphone para iniciar a reprodução.",
        "garantia": 1,
        "avaliacao": "É um Sony, o que mais posso dizer... O fone é super confortável, produz uma excelente qualidade de som e é lindo!",
        "curtiu": "7",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 13,
          "localDaImagem": "https://m.media-amazon.com/images/I/6130NGFVWRL._AC_UL436_.jpg"
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
        "idProduto": 15,
        "codigoBarra": 30062322,
        "nomeProduto": "Home Theater PHT700BT Função Karaokê 550W Rms - Philco Bivolt",
        "valorProduto": 599,
        "quantidadeProduto": "60",
        "marca": "Philco",
        "descricao": "Conexão de áudio e vídeo digital em alta definição.Características do Produto:BluetoothCanais de Áudio: 5.1Potência(Rms): 550WInformações Adicionais:Consumo: 0,12 kWhReproduz Cd | Cd-R/Rw | Vcd | MP3 | Jpeg; Saída de áudio coaxialDisplay digitalFunções.",
        "garantia": 1,
        "avaliacao": "Produto excelente sem palavras, muita qualidade, imagem de qualidade..",
        "curtiu": "0",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 15,
          "localDaImagem": "https://www.casasbahia-imagens.com.br/tv-video/HomeTheater/aparelhosHomeTheater/12123384/878221649/home-theater-philco-pht700bt-5-1-canais-bluetooth-funcao-karaoke-entrada-usb-e-saida-hdmi-550w-12123384.jpg"
        }
      },
      {
        "idProduto": 16,
        "codigoBarra": 133682501,
        "nomeProduto": "Smartphone LG K11+ 32GB Dual Chip Android 7.0 Tela 5.3\" Octa Core 1.5 Ghz 4G Câmera 13MP - Azul",
        "valorProduto": 799,
        "quantidadeProduto": "315",
        "marca": "LG",
        "descricao": "Smartphone LG K11+ 32GB Dual Chip Android 7.0 Tela 5.3\" Octa Core 1.5 Ghz 4G Câmera 13MP - Azul",
        "garantia": 1,
        "avaliacao": "Atende minhas necessidades, boa memoria, bom processador, boa bateria.",
        "curtiu": "3",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 16,
          "localDaImagem": "https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/14136621/1091696234/smartphone-lg-k11-32gb-dual-chip-tela-53-camera-13mp-android-712-azul-14136621.jpg"
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
        "idProduto": 20,
        "codigoBarra": 134187915,
        "nomeProduto": "Notebook A315-53-34Y4 8ª Intel Core i3 4GB 1TB LED HD 15.6\" W10 Preto - Acer",
        "valorProduto": 1999.99,
        "quantidadeProduto": "235",
        "marca": "Acer",
        "descricao": "Estude sem barreiras, edite fotos e vídeos que inspiram, crie textos e apresentações poderosas e otimize todo tipo de processo. Tudo isso muito mais rápido com o processador Intel Core i3-8130U de 8ª geração e a memória de 4GB tipo DDR4.",
        "garantia": 1,
        "avaliacao": "Notebook bom que cumpre o proposto. Processador i3 8°geração, porém não vem com o pacote do Office.",
        "curtiu": "15",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 20,
          "localDaImagem": "https://images-shoptime.b2w.io/produtos/01/00/oferta/46971/4/46971479_2GG.jpg"
        }
      },
      {
        "idProduto": 21,
        "codigoBarra": 31794967,
        "nomeProduto": "Notebook Dell Inspiron i15-5570-M11C 8ª geração Intel Core i5 8GB 1TB 15.6\" HD Windows 10",
        "valorProduto": 3578,
        "quantidadeProduto": "205",
        "marca": "Dell",
        "descricao": "1 HDMI 1.4b, 2 Portas USB 3.1 de 1ª Geração, 1 Porta USB 2.0, Conector de rede, 1 entrada combinada para fone de ouvido/microfone, 1 slot de segurança Noble, 1 leitor de cartão SD (SD, SDHC, SDXC)",
        "garantia": 1,
        "avaliacao": "Comprei um e parou de funcionar ligo para o suporte Dell e nada e resolvido.",
        "curtiu": "6",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 21,
          "localDaImagem": "https://images-na.ssl-images-amazon.com/images/I/61EiR6N0DPL._SL1000_.jpg"
        }
      },
      {
        "idProduto": 22,
        "codigoBarra": 133276588,
        "nomeProduto": "Notebook Dell Inspiron i15-3567-A30C Intel Core 7ª i5 4GB 1TB Tela LED 15,6\" Windows 10 - Cinza",
        "valorProduto": 2698.99,
        "quantidadeProduto": "175",
        "marca": "Dell",
        "descricao": "Notebook Dell Inspiron i15-3567-A30C Intel Core 7ª i5 4GB 1TB Tela LED 15,6\" Windows 10 - Cinza",
        "garantia": 1,
        "avaliacao": "Comprei este Dell pois me falaram que era muito bom, as americanas estão de parabéns pela entrega muito rápido, porém o produto está com problemas a tela aparece para iniciar e depois fica todo escuro e não liga, muito decepcionado.",
        "curtiu": "1",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 22,
          "localDaImagem": "https://a-static.mlcdn.com.br/618x463/notebook-dell-inspiron-15-i15-3567-a30p-serie-3000-intel-core-i5-4gb-1tb-156-windows-10/magazineluiza/220278900/2cf9fa2960ec57529a50e4f3a3a03ab4.jpg"
        }
      },
      {
        "idProduto": 23,
        "codigoBarra": 133775934,
        "nomeProduto": "Notebook Ideapad 330 Intel Core I5-8250u 8GB 1TB HD 15.6\" W10 Prata - Lenovo",
        "valorProduto": 2599.99,
        "quantidadeProduto": "175",
        "marca": "Lenovo",
        "descricao": "Processador Intel Core i5-8250U, tela de 15,6\", Windows 10, 1TB, leitor de Cartões 4 em 1 (SD, SDHC, SDXC, MMC), conexão HDMI, ele possui desempenho profissional, e seu sistema é otimizado para maior velocidade e eficiência.",
        "garantia": 1,
        "avaliacao": "Achei bom o produto: prós: bem fino, leve e bastante rápido. Contras: só vem 02 entradas usb e não tem drive para cd / dvd",
        "curtiu": "0",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 23,
          "localDaImagem": "https://www.extra-imagens.com.br/Informatica/Notebook/13382662/993512512/notebook-lenovo-core-i5-8250u-8gb-1tb-tela-15-6-windows-10-ideapad-330-13382662.jpg"
        }
      },
      {
        "idProduto": 24,
        "codigoBarra": 133621767,
        "nomeProduto": "Notebook Samsung Expert X30 intel Core 8ª i5 Quad Core 8GB 1TB Tela LED HD 15,6\" Windows 10 - Branco Ônix",
        "valorProduto": 3599.92,
        "quantidadeProduto": "100",
        "marca": "Samsung",
        "descricao": "Notebook Samsung Expert X30 intel Core 8ª i5 Quad Core 8GB 1TB Tela LED HD 15,6\" Windows 10 - Branco Ônix",
        "garantia": 1,
        "avaliacao": "Entregue no prazo , máquina muito boa, rápida, mouse sensível e design bem inovador, processador rápido ! Gostei muito",
        "curtiu": "0",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 24,
          "localDaImagem": "https://images-submarino.b2w.io/produtos/01/00/offers/01/00/item/133621/7/133621767_2GG.jpg"
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
        "idProduto": 27,
        "codigoBarra": 40742220,
        "nomeProduto": "Óculos Vr 3d Realidade Virtual / Mvr-8118 / 720p",
        "valorProduto": 149,
        "quantidadeProduto": "50",
        "marca": "LAOL Comercio Digital",
        "descricao": "Óculos de realidade virtual 3D\nAndroid 4.4\nWi-Fi\nResolução: 1280/720\nTamanho da tela 5.5\nTela nítida IPS display\nFrequência: 1.2 GHz\nMemória ram: 1 GB\nMemória interna: 8 GB\nSuporte toque (opcional)\nBluetooth Suporte 4.0\ndistância focal 52 mm lente\n",
        "garantia": 1,
        "avaliacao": "",
        "curtiu": "6",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 27,
          "localDaImagem": "https://images-submarino.b2w.io/produtos/01/00/oferta/41336/6/41336686_1GG.jpg"
        }
      },
      {
        "idProduto": 28,
        "codigoBarra": 51713001,
        "nomeProduto": "Pansonite Vr Reality",
        "valorProduto": 776.44,
        "quantidadeProduto": "30",
        "marca": "Ecletiq",
        "descricao": "Pansonite Vr Headset with Remote Controller, 3d Glasses Virtual Reality Headset for Vr Games & 3D Movies, Eye Care System for iPhone and Android Smartphones.Cor: Sb-pretoVersão mais recente do Vr - Após dois anos de pesquisa, desenvolvimento e ajuste.",
        "garantia": 3,
        "avaliacao": "",
        "curtiu": "20",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 28,
          "localDaImagem": "https://images-submarino.b2w.io/produtos/01/00/oferta/71378/5/71378504_1GG.jpg"
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
        "idProduto": 30,
        "codigoBarra": 46289502,
        "nomeProduto": "Pc Gamer Completo Smat Pc SMT81072 i5 8GB (Geforce GTX 1050TI 4GB) 1TB + Cadeira Gamer",
        "valorProduto": 3839,
        "quantidadeProduto": "60",
        "marca": "Smat Pc",
        "descricao": "Placa de video - GeForce GTX 1050TI 4Gb\nProcessador - Intel Core i5 3.1 6mb (Ou Superior)\nPlaca Mãe: Chipset Intel Express\nMemoria Ram: 8GB\n1 x PCIe x16\n6 x USB 2.0\n1 x HDMI\nRealtek Gigabit LAN\nHd-1TB\nGravador de Dvd / Cd - Não Incluso\nFull HD 1920x1080",
        "garantia": 1,
        "avaliacao": "",
        "curtiu": "3",
        "naoCurtiu": "2",
        "imagemDoProduto": {
          "idImagem": 30,
          "localDaImagem": "https://www.casasbahia-imagens.com.br/Informatica/Computadores/14082525/1048327509/pc-gamer-completo-smart-pc-smt81072-i5-8gb-geforce-gtx-1050ti-4gb-1tb-cadeira-gamer-14082525.jpg"
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
        "idProduto": 32,
        "codigoBarra": 48298377,
        "nomeProduto": "Rádio Am/fm Portátil Mp3 Usb Sd Controle Aux P2 - BX-667",
        "valorProduto": 58.9,
        "quantidadeProduto": "110",
        "marca": "BRIWAX",
        "descricao": "Rádio Am/fm Portátil Mp3 Usb Sd Controle Aux P2 - BX-667",
        "garantia": 1,
        "avaliacao": "Recebi meu rádio e gostei muito..excelente qualidade de som e com vários opcionais...super recomendo",
        "curtiu": "8",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 32,
          "localDaImagem": "https://images-americanas.b2w.io/produtos/01/00/oferta/48298/3/48298375_1GG.jpg"
        }
      },
      {
        "idProduto": 33,
        "codigoBarra": 25391275,
        "nomeProduto": "Relógio Smartwatch A1 Original Touch Bluetooth Gear Chip",
        "valorProduto": 74.98,
        "quantidadeProduto": "50",
        "marca": "Sem Marca",
        "descricao": "Utiliza processador MTK6260A e com Bluetooth 3.0 para ligar-se com o seu Smartphone para ser utilizado como um marcador para que você possa fazer e receber chamadas, bem como proporcionar chamada e notificação de mensagem.",
        "garantia": 1,
        "avaliacao": "O produto não emparelha de jeito nenhum ....gostaria de saber comi faço pra cancelar ?????",
        "curtiu": "3",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 33,
          "localDaImagem": "https://images-na.ssl-images-amazon.com/images/I/61gpXYLLyBL._SX522_.jpg"
        }
      },
      {
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
      },
      {
        "idProduto": 35,
        "codigoBarra": 33245513,
        "nomeProduto": "Relógio Smartwatch DZ09 Inteligente Gear Chip Celular Touch + Mini Fone de Ouvido Bluetooth",
        "valorProduto": 99.4,
        "quantidadeProduto": "40",
        "marca": "CLICKFULL",
        "descricao": "Itens Inclusos:\n- 01 Relógio Smartwatch DZ09.\n- 01 Mini Fone de ouvido bluetooh.\n- 01 Cabo Usb para carregamento.\n- 01 Manual.",
        "garantia": 1,
        "avaliacao": "Comprei porem nao carrega a bateria veio com defeito de fabrica e ate agora estou esperando uma resposta do fornecedor nao recomendo a nonguem comprar edte produto",
        "curtiu": "0",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 35,
          "localDaImagem": "https://images-na.ssl-images-amazon.com/images/I/51TRY5QdC4L.jpg"
        }
      },
      {
        "idProduto": 36,
        "codigoBarra": 132691106,
        "nomeProduto": "Samsung Gear Sport - Preto",
        "valorProduto": 1229,
        "quantidadeProduto": "65",
        "marca": "Samsung",
        "descricao": "Samsung Gear Sport - Preto",
        "garantia": 1,
        "avaliacao": "Produto excelente e a entrega ocorreu antes do prazo.",
        "curtiu": "7",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 36,
          "localDaImagem": "https://images-americanas.b2w.io/produtos/01/00/item/132691/1/132691106_1GG.jpg"
        }
      },
      {
        "idProduto": 37,
        "codigoBarra": 133731106,
        "nomeProduto": "Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0 Tela 6\" Octa-Core 1.8GHz 4G Câmera 16MP F1.7 + 5MP F1.9 (Dual Cam) - Preto",
        "valorProduto": 1249,
        "quantidadeProduto": "60",
        "marca": "Samsung",
        "descricao": "Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0 Tela 6\" Octa-Core 1.8GHz 4G Câmera 16MP F1.7 + 5MP F1.9 (Dual Cam) - Preto",
        "garantia": 1,
        "avaliacao": "É uma smartphone muito com design nem inovador com uma ótima qualidade para navegar no aparelho",
        "curtiu": "2",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 37,
          "localDaImagem": "https://i.zst.com.br/images/smartphone-samsung-galaxy-j8-sm-j810m-64gb-16-0-mp-2-chips-android-8-0-oreo-3g-4g-wi-fi-photo603807920-45-13-1f.jpg"
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
        "idProduto": 39,
        "codigoBarra": 134218128,
        "nomeProduto": "Smartphone Samsung Galaxy S10+ 128GB Dual Chip Android 9.0 Tela 6.4” Octa-Core 4G Câmera Tripla Traseira 12MP + 12MP + 16MP - Preto",
        "valorProduto": 5499,
        "quantidadeProduto": "800",
        "marca": "Samsung",
        "descricao": "Smartphone Samsung Galaxy S10+ 128GB Dual Chip Android 9.0 Tela 6.4” Octa-Core 4G Câmera Tripla Traseira 12MP + 12MP + 16MP - Preto",
        "garantia": 1,
        "avaliacao": "Aparelho ótimo, super recomendo. Chegou em perfeito estado. Americanas como sempre pontual na entrega.",
        "curtiu": "15",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 39,
          "localDaImagem": "https://images.samsung.com/is/image/samsung/br-galaxy-s10-sm-g975-sm-g975fzbjzto-lprismblue-159101947?$PD_GALLERY_PNG$"
        }
      },
      {
        "idProduto": 40,
        "codigoBarra": 134065707,
        "nomeProduto": "Smart TV 50' AOC Le50u7970s Ultra HD 4k Uhd Conversor Digital 4 HDMI 2 USB Wi-Fi 60hz",
        "valorProduto": 2049.99,
        "quantidadeProduto": "500",
        "marca": "AOC",
        "descricao": "A Smart TV 50” 4K UHD AOC LE50U7970S transforma a sua sala em uma verdadeira central de entretenimento. Com um único clique, você assiste as suas séries e filmes prediletos com imagem e som digital nos principais serviços de vídeo disponíveis.",
        "garantia": 1,
        "avaliacao": "O que eu não gostei nela e que não da pra ajusta a imagem",
        "curtiu": "8",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 40,
          "localDaImagem": "https://a-static.mlcdn.com.br/618x463/smart-tv-4k-led-50-aoc-le50u7970s-conversor-digital-4-hdmi-2-usb/magazineluiza/193419600/e69e0d46dc2c8dbf2ae03ca8ee020fbb.jpg"
        }
      },
      {
        "idProduto": 41,
        "codigoBarra": 133403743,
        "nomeProduto": "Smart TV LED 49\" Philco PTV49e68dSWN Full HD com Conversor Digital 3 HDMI 1 USB Wi-Fi 60Hz - Preta",
        "valorProduto": 1629,
        "quantidadeProduto": "650",
        "marca": "Philco",
        "descricao": "imagem em Full HD, conexões HDMI e USB, conversor digital integrado, Wi-Fi integrado, som surround, aumentando a qualidade sonora,, ela é a escolha perfeita para transformar sua sala em um verdadeira sala de cinema. Tudo que você sempre quis em uma TV.",
        "garantia": 1,
        "avaliacao": "Gostei muito do som e imagem ,outro detalhe que apreciei muito foi o app netflix facil de usar alem de ser mais moderno que o netflix no mod 49 android",
        "curtiu": "1",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 41,
          "localDaImagem": "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133403/7/133403743_1GG.png"
        }
      },
      {
        "idProduto": 42,
        "codigoBarra": 133244842,
        "nomeProduto": "Smart TV LED Ambilight 55\" Philips 55PUG6212/78 Ultra HD 4k com Conversor Digital 4 HDMI 2 USB Wi-Fi 60Hz - Preto",
        "valorProduto": 2711.26,
        "quantidadeProduto": "400",
        "marca": "Philips",
        "descricao": "Smart TV LED Ambilight 55\" Philips 55PUG6212/78 Ultra HD 4k com Conversor Digital 4 HDMI 2 USB Wi-Fi 60Hz - Preto",
        "garantia": 2,
        "avaliacao": "Produto muito bom, excelente imagem e audio. O efeito ambilight é show!",
        "curtiu": "4",
        "naoCurtiu": "3",
        "imagemDoProduto": {
          "idImagem": 42,
          "localDaImagem": "https://images-soubarato.b2w.io/produtos/01/00/offers/01/00/item/133244/8/133244842_1GG.png"
        }
      },
      {
        "idProduto": 43,
        "codigoBarra": 134162700,
        "nomeProduto": "Smart TV LED 40\" Samsung 40J5290 Full HD Com Conversor Digital 2 HDMI 1 USB Wi-Fi Screen Mirroring e Web Browser",
        "valorProduto": 1399.99,
        "quantidadeProduto": "1000",
        "marca": "Samsung",
        "descricao": "Smart TV LED 40\" Samsung 40J5290 Full HD Com Conversor Digital 2 HDMI 1 USB Wi-Fi Screen Mirroring e Web Browser",
        "garantia": 1,
        "avaliacao": "A tv é linda,moderna,li muitos comentários negativos e fiquei com um pouco de receio mas comprei assim mesmo,melhor investimento que fiz,super fininha muito linda. Comprem sem medo.",
        "curtiu": "30",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 43,
          "localDaImagem": "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/134162/7/134162700_1GG.jpg"
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
      },
      {
        "idProduto": 45,
        "codigoBarra": 131471558,
        "nomeProduto": "TV LED 32\" Toshiba 32L1600 HD com Conversor Digital 3 HDMI 1 USB 60Hz - Preta",
        "valorProduto": 879,
        "quantidadeProduto": "900",
        "marca": "Toshiba",
        "descricao": "A TV LED 32\" Toshiba 32L1600 é assim, ela vai te proporcionar maior nitidez, clareza e definição, para que você possa assistir e curtir ao máximo seus programas, filmes e series preferidos, imagem de última geração HD, conexões HDMI e USB.",
        "garantia": 1,
        "avaliacao": "Com pouco mais de 3 meses a tv está com problema na entrada usb. Não consigo assistir um filme ou séries, pois a tv fica reiniciando o vídeo. Já tentei com várias marcas de pendrive e hd externo, mesmo assim o problema continua.",
        "curtiu": "14",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 45,
          "localDaImagem": "https://images-submarino.b2w.io/produtos/01/00/item/131471/5/131471558_2GG.jpg"
        }
      },
      {
        "idProduto": 46,
        "codigoBarra": 133823764,
        "nomeProduto": "Relógio Smartwatch Samsung Galaxy Watch Bt 46mm - Prata",
        "valorProduto": 1505,
        "quantidadeProduto": "50",
        "marca": "Samsung",
        "descricao": "Relógio Smartwatch Samsung Galaxy Watch Bt 46mm - Prata",
        "garantia": 1,
        "avaliacao": "Produto de qualidade, funcionalidades muito úteis e tudo funcionando bem. No entanto, o anuncio do site da americanas não informa que o produto é importado, o que impede certas funcionalidades como o samsung pay.",
        "curtiu": "10",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 46,
          "localDaImagem": "https://29028l.ha.azioncdn.net/img/2018/10/produto/131291/19/large/smartwatch-samsung-galaxy-watch-bt-sm-r800-prata.jpg"
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
        "idProduto": 49,
        "codigoBarra": 125507139,
        "nomeProduto": "Notebook 2 em 1 M8W Intel Quad Core 1GB 16GB LED 8,9 W10 Preto - Multilaser",
        "valorProduto": 779.28,
        "quantidadeProduto": "200",
        "marca": "Multilaser",
        "descricao": "Notebook 2 em 1 M8W Intel Quad Core 1GB 16GB LED 8,9 W10 Preto - Multilaser",
        "garantia": 1,
        "avaliacao": "ótimo para estudo e tarefas simples. Preço justo para sua proposta de uso",
        "curtiu": "5",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 49,
          "localDaImagem": "https://a-static.mlcdn.com.br/618x463/tablet-m8w-plus-hibrido-windows-10-8-9-pol-ram-2gb-32gb-dual-camera-preto-multilaser-nb242/lojamultilaser/3029/abe6573ca4be74d7aa781fb998a7933a.jpg"
        }
      },
      {
        "idProduto": 50,
        "codigoBarra": 47740608,
        "nomeProduto": "Tablet Philco PTB7QRG, Android 7.1, 8GB - Rosa",
        "valorProduto": 289,
        "quantidadeProduto": "100",
        "marca": "Philco",
        "descricao": "Tela: Capacitiva 7 Multi-toque com até 5 pontos simultâneos (1024x600)\nProcessador: RK3126C Quad-Core - 1.2Ghz\nSistema Operacional: Android 7.1.2 - Nougat\nBluetooth: 2.0\nWifi: Integrado (802.11 b/g/n)\nMemória: 1GB DDR3\nArmazenamento: 8GB",
        "garantia": 1,
        "avaliacao": "Péssima qualidade descarrega muito rápido a minha filha assiste desenhos nele e ele dura umas três horas",
        "curtiu": "0",
        "naoCurtiu": "1",
        "imagemDoProduto": {
          "idImagem": 50,
          "localDaImagem": "https://images-americanas.b2w.io/produtos/01/00/oferta/47740/6/47740610_1GG.jpg"
        }
      },
      {
        "idProduto": 51,
        "codigoBarra": 123068591,
        "nomeProduto": "Tablet Samsung Galaxy Tab E T561M 8GB Wi-Fi + 3G Tela 9.6\" Android 4.4 Quad-Core - Branco",
        "valorProduto": 899.99,
        "quantidadeProduto": "400",
        "marca": "Samsung",
        "descricao": "Tablet Samsung Galaxy Tab E T561M 8GB Wi-Fi + 3G Tela 9.6\" Android 4.4 Quad-Core - Branco",
        "garantia": 1,
        "avaliacao": "Gosto de fazer as avaliações depois de um bom tempo de uso, esse aparelho é ótimo, recomendo",
        "curtiu": "11",
        "naoCurtiu": "0",
        "imagemDoProduto": {
          "idImagem": 51,
          "localDaImagem": "https://www.extra-imagens.com.br/Tablets/Tablet/TabletAndroid/4826630/117656539/tablet-samsung-galaxy-tab-e-9-6-3g-sm-t561-com-tela-9-6-8gb-camera-5mp-gps-android-4-4-processador-quad-core-1-3-ghz-preto-4826630.jpg"
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
        "idProduto": 53,
        "codigoBarra": 40473692,
        "nomeProduto": "Relógio Xiaomi Mi Band 3 SmartWatch para Android iOS - Preto",
        "valorProduto": 197,
        "quantidadeProduto": "100",
        "marca": "XIAOMI",
        "descricao": "Tela OLED de 0.78 \"\nCompatível com iOS 7.0 ou superior, ou Android 4.4 ou superior e Bluetooth: 4.2\nMaterial: plástico e alumínio.\nAcelerômetro de baixa potência e sensor cardíaco\nCabo de carregamento USB\nControle seu nível de atividade\n",
        "garantia": 1,
        "avaliacao": "Indico pois é versátil e com preço acessível! Tem uma aparência bonita e é muito confortável no braço. Disponibiliza várias funções para treinos e acompanhamento físico!",
        "curtiu": "12",
        "naoCurtiu": "3",
        "imagemDoProduto": {
          "idImagem": 53,
          "localDaImagem": "https://images-americanas.b2w.io/produtos/01/00/oferta/43896/3/43896390_1GG.jpg"
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
      }
    ]
    
  }
  
  ngOnInit() {
  }
  
}
