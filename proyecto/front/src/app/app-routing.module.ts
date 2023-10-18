import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ListaUsuariosComponent } from './components/admin/lista-usuarios/lista-usuarios.component';
import { Error404Component } from './components/error404/error404.component';


const routes: Routes = [
    {path:'', component: InicioComponent},
    {path:'registro-app', component: RegistroComponent },
    {path:'inicio-app', component: InicioComponent },
    {path:'Login-app', component: LogInComponent },
    {path:'admin/usuarios-registrados', component: ListaUsuariosComponent },
    {path:'edit-user/:id', component: RegistroComponent },
    {path:'404', component: Error404Component },
    {path:'**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
