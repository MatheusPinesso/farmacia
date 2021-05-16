import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from './produto';
import { ProdutosService } from './produtos.service';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})


export class ProdutosComponent implements OnInit {

  produtos!: Produto[];
  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  constructor(private router: Router, private service: ProdutosService,  private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.produtos = dados)
    this.sortOptions = [
      {label: 'Preço Decrecsente', value: '!preco'},
      {label: 'Preço Crecsente', value: 'preco'}
  ];
  this.primengConfig.ripple = true;
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}
