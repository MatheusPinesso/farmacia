import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng-lts/api';


@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent implements OnInit {
    

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
                      items: [{ routerLink:'/produtos',label: 'Febre'}, {routerLink:'/produtos',label: 'Dor de Cabeça'}]
                  },
                  {
                      label: 'Vitaminas',
                      items: [{routerLink:'/produtos',label: 'Vitamina A'}, {routerLink:'/produtos',label: 'Vitamina B'},
                      {routerLink:'/produtos',label: 'Vitamina C'}]
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



