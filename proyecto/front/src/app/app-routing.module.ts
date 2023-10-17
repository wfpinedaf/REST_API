import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ListaUsuariosComponent } from './components/admin/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
    {path:'', component: InicioComponent},
    {path:'registro-app', component: RegistroComponent },
    {path:'inicio-app', component: InicioComponent },
    {path:'Login-app', component: LogInComponent },
    {path:'admin/usuarios-registrados', component: ListaUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
