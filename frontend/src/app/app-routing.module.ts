import { OndeEstamosComponent } from './onde-estamos/onde-estamos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { EntrarComponent } from './login/entrar/entrar.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListaUsuariosComponent } from './login/lista-usuarios/lista-usuarios.component';
import { EditarUsuariosComponent } from './login/lista-usuarios/editar-usuarios/editar-usuarios.component'
import { MenuComponent } from './menu/menu.component';
import { EditarProdutosComponent } from './produtos/editar-produtos/editar-produtos.component';
import { CadastrarProdutosComponent } from './produtos/cadastrar-produtos/cadastrar-produtos.component';

const routes: Routes = [
  { path: '', redirectTo:'mainscreen', pathMatch:'full' },
  { path: 'listar-produtos', component: ProdutosComponent},
  { path: 'mainscreen', component: MainscreenComponent},
  { path: 'entrar', component: EntrarComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'onde-estamos', component: OndeEstamosComponent},
  { path: 'lista-usuarios', component: ListaUsuariosComponent},
  { path: 'editar-usuarios/:id', component: EditarUsuariosComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'editar-produtos/:id', component: EditarProdutosComponent},
  { path: 'cadastrar-produtos', component: CadastrarProdutosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
