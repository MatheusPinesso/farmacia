import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng-lts/api';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css'],
  providers: [MessageService] 
})
export class CadastrarProdutosComponent implements OnInit {

  items!: MenuItem[];
form!: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private service: ProdutosService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
    nome: [null, [Validators.required]],

    preco: [null, [Validators.required]],

    tipo: [null, [Validators.required]],

    image: [null]
      
    })
  }
  onSubmit() {
    if( this.form.valid ) {
      setTimeout(() => 
      this.router.navigate(['mainscreen']), 2500) 
      this.service.create(this.form.value).subscribe(
        success => this.messageService.add({severity:'success', summary: 'Sucesso!', detail:'Produto cadastrado!'}),
        error => this.messageService.add({severity:'error', summary: 'Erro!', detail:"Ocorreu um erro."})
      )
      
    }
      else {
        this.messageService.add({severity:'error', summary: 'Erro!', detail:"Digite os dados nos campos!"})
      }
      
      
  }
  cancel() {
    this.router.navigate(['mainscreen'])
  }

}
