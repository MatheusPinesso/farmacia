import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng-lts/api';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../lista-usuarios/usuarios.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [MessageService] 
})
export class CadastroComponent implements OnInit {

items!: MenuItem[];
form!: FormGroup
  
constructor( private router: Router, private fb: FormBuilder, private service: UsuariosService,private messageService: MessageService) { }
    

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
    nome: [null, [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],

    telefone: [null, [Validators.required, Validators.minLength(9)]],

    endereco: [null, [Validators.required]],
    
    cpf: [null, [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
    
    email: [null, [Validators.required, Validators.minLength(3),Validators.email]],
    
    senha: [null, [Validators.required, Validators.minLength(5)]]
      
    })
}

    onSubmit() {
      if( this.form.valid ) {
        setTimeout(() => 
        this.router.navigate(['mainscreen']), 2500) 
        this.service.create(this.form.value).subscribe(
          success => this.messageService.add({severity:'success', summary: 'Sucesso!', detail:'Usuário cadastrado!'}),
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

    alterarCorForm() {
      if( this.form.valid ) {

      }
    }

  
    

    
}


