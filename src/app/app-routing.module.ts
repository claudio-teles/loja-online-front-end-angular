import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LojaComponent } from './loja/loja.component';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';
import { VerProdutoComponent } from './ver-produto/ver-produto.component';

const routes: Routes = [
  { path: 'lojas', component: LojaComponent },
  { path: 'produtos', component: ListaDeProdutosComponent},
/*   { path: 'produtos', redirectTo: 'produtos/:id', pathMatch: 'full' }, */
  { path: 'produtos/:id', component: VerProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
