import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './Login';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clienteLogado: Login = {
    intensao: 'login',
    id_cliente_logado: (CadastroComponent.idCliente - 1).toString(),
    nome_de_usuario: '',
    senha_de_usuario: ''
  }

  mensagem: string = 'Cadastre - se ou faça o login, se já for cadastrado.'

  constructor(public router: Router, private login: LoginService) {}

  ngOnInit() {}

  enviarLogin() {
    this.login.fazerLogin(this.clienteLogado)
      .subscribe(
        respostaLogin => {
          this.mensagem = respostaLogin.text.toString()
          console.log('Resposta: '+respostaLogin)
        }
      )
  }

}
