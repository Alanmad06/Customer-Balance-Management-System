import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { authGuard } from './guardianes/auth.guard';

const routes: Routes = [
  {path:'', component: TableroComponent , canActivate: [authGuard]},
  {
    path:'registrarse', component: RegistroComponent
  },{
    path:'login', component: LoginComponent
  },{ path:'configuracion', component: ConfiguracionComponent ,canActivate: [authGuard]},{
    path:'cliente/editar/:id', component:EditarClienteComponent ,canActivate: [authGuard]
  },{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
