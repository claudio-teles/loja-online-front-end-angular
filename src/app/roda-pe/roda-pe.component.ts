import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roda-pe',
  templateUrl: './roda-pe.component.html',
  styleUrls: ['./roda-pe.component.css']
})
export class RodaPeComponent implements OnInit {


  contatos: string[] = [
    'https://www.facebook.com/Loja-Online',
    '@Loja-Online-Twitter',
    '@Instagram-Loja-Online',
    'contato@lojaonline.com'
  ]

  url: string[] = [
    'https://www.facebook.com/',
    'https://twitter.com/',
    'https://www.instagram.com/?hl=pt-br'
  ]

  constructor() {}

  ngOnInit() {}

}
