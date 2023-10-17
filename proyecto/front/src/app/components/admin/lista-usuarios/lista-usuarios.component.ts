import { Component, OnInit } from '@angular/core';
import {UsersService} from "src/app/services/usuarios.service"
import{ClassUsers} from "src/app/models/Usuarios"

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{
    listaUsuarios: ClassUsers[]= []
    constructor(private _usersService:UsersService) {}

    ngOnInit(): void {
        this.ObtenerUsuarios()
    }

    ObtenerUsuarios(){
        this._usersService.getUsersList().subscribe(respuestaAPI =>{
            this.listaUsuarios = respuestaAPI
            console.log(this.listaUsuarios)
        }, error =>{
            console.log(error)
        });

    }
}
