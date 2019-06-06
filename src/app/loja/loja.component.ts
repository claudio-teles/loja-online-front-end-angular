import { Component, OnInit } from '@angular/core';
import { LojaService } from './loja.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  
  produtos: any[] = []
  
  constructor(private loja: LojaService) {
    
    this.produtos = this.loja.mostrarEstoque();
    
  }
  
  ngOnInit() {}
  
}
