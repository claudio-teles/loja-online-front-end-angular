import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LojaComponent } from './loja/loja.component';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';
import { VerProdutoComponent } from './ver-produto/ver-produto.component';
import { ItensMaisVistosComponent } from './itens-mais-vistos/itens-mais-vistos.component';
import { CarrinhoDeComprasComponent } from './carrinho-de-compras/carrinho-de-compras.component';

const routes: Routes = [
  { path: 'lojas', component: LojaComponent },
  { path: 'produtos', component: ListaDeProdutosComponent},
  { path: 'itens_tambem_vistos', component: ItensMaisVistosComponent },
  { path: 'produtos/:id', component: VerProdutoComponent},
  { path: 'carrinho_de_compras/:id_carrinho_de_compras/:id_produto', component: CarrinhoDeComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
