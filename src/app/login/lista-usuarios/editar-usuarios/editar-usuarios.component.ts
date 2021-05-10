import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  form!: FormGroup;
  usuarios!: Usuario 

  constructor(private fb: FormBuilder, private service: UsuariosService, private router: Router, private route: ActivatedRoute) { }

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
   const id = this.route.snapshot.paramMap.get('id')
   this.service.readById(id).subscribe(data => {this.usuarios = data})
  }

  cancel() {
    this.router.navigate(["/lista-usuarios"])
  }

  update() {
    this.service.update(this.usuarios).subscribe(() => {
      alert()
    })
  }

}
