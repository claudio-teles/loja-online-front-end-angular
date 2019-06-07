import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: {}
  @Input() nome_de_usuario: string
  @Input() senha_de_usuario: string

  constructor(public router: Router) {}

  ngOnInit() {
  }

}
