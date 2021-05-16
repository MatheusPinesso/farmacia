import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng-lts/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items!: MegaMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Produtos', icon: 'pi pi-table',
          items: [
              [
                  {
                      label: 'Medicamentos',
                      items: [{ routerLink:'/listar-produtos',label: 'Febre'}, {routerLink:'/listar-produtos',label: 'Dor de Cabeça'}]
                  },
                  {
                      label: 'Vitaminas',
                      items: [{routerLink:'/listar-produtos',label: 'Vitamina A'}, {routerLink:'/listar-produtos',label: 'Vitamina B'},
                      {routerLink:'/listar-produtos',label: 'Vitamina C'}]
                  },
                  {
                    label: 'Gerenciar Produtos',
                    items: [{routerLink:'/cadastrar-produtos',label: 'Cadastrar Produtos'}]
                }
              ],
              
                ]
      },
      {
          label: 'Onde Estamos', icon: 'pi pi-user',
          items: [
              [
                  {
                      items: [{routerLink:'/onde-estamos',label: 'Nossas Lojas'}]
                  },
                  
              ],
            
          ]
      },
      {
          label: 'Login', icon: 'pi pi-user',
          items: [
              [
                  {
                      items: [{routerLink:'/entrar', label: 'Entrar'}, {routerLink:'/cadastro',label: 'Cadastro'},{routerLink:'/lista-usuarios',label: 'Usuários'}]
                  },
                    
              ],
              
          ]
          
        }
        
  
    ]
}

}
