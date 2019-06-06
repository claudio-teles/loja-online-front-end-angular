import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  clienteCadastrado = {
    'primeiro_nome':'',
    'sobre_nome':'',
    'nome_de_usuario':'',
    'senha':'',
    'rg':'',
    'cpf':'',
    'rua':'',
    'numero_da_residencia':'',
    'complemento':'',
    'bairro':'',
    'cidade':'',
    'estado':'',
    'pais':'',
    'tipo_de_conta':'',
    'variacao':'',
    'bandeira':'',
    'nome_da_conta':'',
    'numero_da_conta':'',
    'mes':'',
    'ano':''
  }

  constructor() {}

  ngOnInit() {
    
  }

  mostarFormulario() {
    console.log('Console: ' + this.clienteCadastrado.primeiro_nome);
  }

}
