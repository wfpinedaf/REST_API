import { Component, OnInit } from '@angular/core';
import {UsersService} from "src/app/services/usuarios.service"
import{ClassUsers} from "src/app/models/Usuarios"
import Swal from 'sweetalert2'

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

    EliminarUsuario(id:any){
        Swal.fire({
            title: 'Are you sure you want to delete this user?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                this._usersService.deleteUser(id).subscribe(RespuestaAPI =>{
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario creado',
                        iconColor: '#2ce'
                    })
                    this.ObtenerUsuarios()
                },error =>{
                    console.log(error)
                })
            }
          })
    }
}
