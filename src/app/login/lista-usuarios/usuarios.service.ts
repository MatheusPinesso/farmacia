import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UsuariosService implements OnInit {


    private readonly API = `${environment.API}usuarios`

    constructor(private http: HttpClient) { }
    ngOnInit(): void {
    }

    
    
    list() {
   return this.http.get<Usuario[]>(this.API)
        .pipe(
            delay(500),
            tap(console.log)
        )
    }

    create(usuario: any) {
        return this.http.post<Usuario>(this.API, usuario).pipe(take(1))

    }

    readById(id:any): Observable<Usuario> {
        const url = `${this.API}/${id}`
        return this.http.get<Usuario>(url).pipe(take(1))
    }

    update(usuario:any): Observable<Usuario> {
        const url = `${this.API}/${usuario.id}`
        return this.http.put<Usuario>(url, usuario)
    }

}