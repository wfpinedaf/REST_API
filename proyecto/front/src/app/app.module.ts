import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LogInComponent } from './components/log-in/log-in.component';
//COmponenete que nos ayudan a manipular formularios
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http";
import { ListaUsuariosComponent } from './components/admin/lista-usuarios/lista-usuarios.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PiePaginaComponent,
    BarraNavegacionComponent,
    RegistroComponent,
    LogInComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
