import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Fornecedor } from '../../interfaces/fornecedor';
import { fornecedorService } from '../../../service/fornecedor.service';





@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css',
})
export class FornecedorComponent {
  fornecedor: Fornecedor[] = [];
  fornecedorForm: FormGroup = new FormGroup({});
  fornecedorNovo: Fornecedor | undefined;

  constructor(
    private fornecedorService: fornecedorService,
    private formbuilder: FormBuilder
  ) {
    this.fornecedorForm = this.formbuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  inserir() {
    if (this.fornecedorForm.valid) {
      const fornecedorNovo: Fornecedor = {
        nome: this.fornecedorForm.value.nome,
        telefone: this.fornecedorForm.value.telefone,
        id: this.generateRandomString(6),
        endereco: ''
      };
      this.fornecedorForm.reset();
      this.fornecedor.push(fornecedorNovo);
      this.fornecedorService.adicionar(fornecedorNovo).subscribe();
      alert('fornecedor cadastrado com sucesso!');
    }
  }


  listar(): void {
    this.fornecedorService
      .listar()
      .subscribe((listfornecedor) => (this.fornecedor = this.fornecedor));
  }

  ngOnInit(): void {
    this.listar();
  }

  remover(id: string): void {
    this.fornecedor = this.fornecedor.filter((c) => c.id !== id)
    this.fornecedorService.remover(id);
    alert('removido com sucesso!');
  }
}

