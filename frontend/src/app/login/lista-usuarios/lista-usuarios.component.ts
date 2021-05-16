import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng-lts/api';
import { Usuario } from './usuario';
import { UsuariosService } from './usuarios.service';
import {MessageService} from 'primeng-lts/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
  providers: [MessageService]

})
export class ListaUsuariosComponent implements OnInit {
  
  usuarios!: Usuario[];

  constructor(private service: UsuariosService, private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.usuarios = dados)

  }

}
