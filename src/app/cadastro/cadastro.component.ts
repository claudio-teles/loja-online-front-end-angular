import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  clienteCadastrado: {}

  @Input() primeiro_nome: string
  @Input() sobre_nome: string
  @Input() nome_de_usuario: string
  @Input() senha: string
  @Input() rg: string
  @Input() cpf: string
  @Input() rua: string
  @Input() numero_da_residencia: string
  @Input() complemento: string
  @Input() bairro: string
  @Input() cidade: string
  @Input() estado: string
  @Input() pais: string
  @Input() tipo_de_conta: string
  @Input() variacao: string
  @Input() bandeira: string
  @Input() nome_da_conta: string
  @Input() numero_da_conta: string
  @Input() mes: string
  @Input() ano: string

  constructor() {
    
  }

  ngOnInit() {
    
  }

}
