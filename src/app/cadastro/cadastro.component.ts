import { Component, OnInit } from '@angular/core';

import { CadastroService } from './cadastro.service';
import { Cliente } from './Cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  clienteCadastrado: Cliente = {
    primeiro_nome: '',
    sobre_nome: '',
    nome_de_usuario: '',
    senha: '',
    rg: '',
    cpf: '',
    rua: '',
    numero_da_residencia: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    pais: '',
    tipo_de_conta: '',
    variacao: '',
    bandeira: '',
    nome_da_conta: '',
    numero_da_conta: '',
    mes: '',
    ano: ''
  }

  static idCliente: number

  constructor(private cadastro: CadastroService) {}

  ngOnInit() {}

  enviarCadastro() {
    this.cadastro.realizarCadastro(this.clienteCadastrado)
      .subscribe(
        respostaCadastroService => {
          CadastroComponent.idCliente = respostaCadastroService.idCliente
        }
      )
  }

}
