import { Produto } from './produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

   private readonly API = `${environment.API}produtos`

  constructor(private http: HttpClient) { }


  list() {
    return this.http.get<Produto[]>(this.API)
         .pipe(
             delay(500),
             tap(console.log)
         )
     }

     create(produto: any) {
      return this.http.post<Produto>(this.API, produto).pipe(take(1))

  }
}
