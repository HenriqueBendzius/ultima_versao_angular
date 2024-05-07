





// import { Cliente } from './../interfaces/Cliente';

import { Injectable } from '@angular/core';
import { Fornecedor } from '../app/interfaces/fornecedor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class fornecedorService {
  private clientesUrl = 'http://localhost:3000/fornecedor';
  fornecedorUrl!: string;
  constructor(private http: HttpClient) {}

  //Esta lista virá da API
  fornecedor: Fornecedor[] = [
    /*{ id: 'fdaklfads', nome: 'Thiago Xavier' },
    { id: 'teste', nome: 'Teste 2', telefone: '2345678' },*/
  ];

  listar(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.fornecedorUrl) as Observable<Fornecedor[]>;
    //return this.clientes;
  }

  getById(id:string){
    return this.http.get(`${this.fornecedorUrl}/${id}`) as Observable<Fornecedor>
  }

  remover(id: string) {
    // const cliente = this.clientes.find((c) => c.id == id);

    // if (cliente) {
    //   const index = this.clientes.indexOf(cliente);
    //   this.clientes.splice(index, 1);
    // }
    return this.http.delete(`${this.fornecedorUrl}/${id}`)
  }

  atualizar(fornecedor:Fornecedor){
  return this.http.put(`${this.fornecedorUrl}/${fornecedor.id}`,fornecedor , this.httpHeader)

  }
   httpHeader = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  adicionar(fornecedor: Fornecedor) {

    return this.http.post(this.fornecedorUrl, fornecedor, this.httpHeader)
    //this.re
  }
}
