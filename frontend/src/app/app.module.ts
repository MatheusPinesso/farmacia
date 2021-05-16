import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { EntrarComponent } from './login/entrar/entrar.component';
import {AccordionModule} from 'primeng/accordion'; 
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng-lts/button'; 
import {MegaMenuModule} from 'primeng-lts/megamenu';
import { OndeEstamosComponent } from './onde-estamos/onde-estamos.component';                 
import {StepsModule} from 'primeng/steps';
import {InputTextModule} from 'primeng-lts/inputtext';
import { ListaUsuariosComponent } from './login/lista-usuarios/lista-usuarios.component';
import {TableModule} from 'primeng-lts/table';
import { HttpClientModule } from '@angular/common/http';
import {ProgressSpinnerModule} from 'primeng-lts/progressspinner';
import { EditarUsuariosComponent } from './login/lista-usuarios/editar-usuarios/editar-usuarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng-lts/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { CadastrarProdutosComponent } from './produtos/cadastrar-produtos/cadastrar-produtos.component';
import { EditarProdutosComponent } from './produtos/editar-produtos/editar-produtos.component';
import {DataViewModule} from 'primeng-lts/dataview';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {GMapModule} from 'primeng-lts/gmap';
import {AgmCoreModule} from '@agm/core';




@NgModule({
  declarations: [
    AppComponent,
    MainscreenComponent,
    ProdutosComponent,
    CadastroComponent,
    EntrarComponent,
    OndeEstamosComponent,
    ListaUsuariosComponent,
    EditarUsuariosComponent,
    MenuComponent,
    CadastrarProdutosComponent,
    EditarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AccordionModule,
    ButtonModule,
    MegaMenuModule,
    StepsModule,
    InputTextModule,
    TableModule, 
    HttpClientModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule,
    DataViewModule,
    RatingModule,
    RippleModule,
    DropdownModule,
    DialogModule,
    GMapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAF8vl3nMaZ8V3nfcweOEy2ZHrB-qKShE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
