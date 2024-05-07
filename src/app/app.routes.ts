import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './rota/rota.component';
import { FornecedorComponent } from './components/fornecedor/fornecedor.component';
import { FornecedorDetailComponent } from './fornecedor-detail/fornecedor-detail.component';

export const routes: Routes = [
    {path: '' , component: HomeComponent},
{path: 'nova-rota' , component:RotaComponent},
{path: 'fornecedor/:id' , component: FornecedorComponent },
{path: 'fornecedor', component:FornecedorComponent},
{path:'**' , component: HomeComponent}



];
