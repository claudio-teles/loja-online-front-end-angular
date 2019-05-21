import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodaPeComponent } from './roda-pe/roda-pe.component';
import { LojaComponent } from './loja/loja.component';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';
import { VerProdutoComponent } from './ver-produto/ver-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    RodaPeComponent,
    LojaComponent,
    ListaDeProdutosComponent,
    VerProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
