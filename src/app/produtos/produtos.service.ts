import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) {}

  listarProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>("http://localhost:3000/produtos/");
  }
}
