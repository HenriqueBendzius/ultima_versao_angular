import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { Fornecedor } from '../interfaces/fornecedor';

import { fornecedorService } from '../../service/fornecedor.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fornecedor-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fornecedor-detail.component.html',
  styleUrl: './fornecedor-detail.component.css'
})
export class FornecedorDetailComponent {
  [x: string]: any;
  fornecedor?:Fornecedor;
  clienteForm: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute , private fornecedorService:fornecedorService, private FormBuilder: FormBuilder){

this.getClientByld();

  }

  id?:string;
  getClientByld(){
     this.id = this.route.snapshot.paramMap.get('id')?? '';
     this.fornecedorService.getById(this.id).subscribe((fornecedorResponse) => (this.fornecedor = this['fornecedorResponse']))

     this.clienteForm = this.FormBuilder.group({
        id:[this.fornecedor?.id],
        nome:[this.fornecedor?.nome],
        endereco:[this.fornecedor?.endereco],
        telefone:[this.fornecedor?.telefone],
        
        
     })

    // alert(this.id);
  }

  update(): void{
    if (this['fornecedorForm'].valid) {
      const fornecedorNovo: Fornecedor = {
        id: this['fornecedorForm'].value.id,
        nome: this['fornecedorForm'].value.nome,
        endereco:this['fornecedorForm'].value.endereco,
        telefone: this['fornecedorForm'].value.telefone,
        

      }
      this.fornecedorService.atualizar(this['fornecedorNovo']).subscribe()
      alert('alterado com sucesso')
      };

  }

}


