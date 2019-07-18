import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodaPeComponent } from './roda-pe/roda-pe.component';
import { LojaComponent } from './loja/loja.component';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';
import { VerProdutoComponent } from './ver-produto/ver-produto.component';
import { ItensMaisVistosComponent } from './itens-mais-vistos/itens-mais-vistos.component';
import { CarrinhoDeComprasComponent } from './carrinho-de-compras/carrinho-de-compras.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { VendasRealizadasComponent } from './vendas-realizadas/vendas-realizadas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RodaPeComponent,
    LojaComponent,
    ListaDeProdutosComponent,
    VerProdutoComponent,
    ItensMaisVistosComponent,
    CarrinhoDeComprasComponent,
    CadastroComponent,
    LoginComponent,
    VendasRealizadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    CarouselModule,
    PasswordModule,
    TooltipModule,
    InputTextModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
