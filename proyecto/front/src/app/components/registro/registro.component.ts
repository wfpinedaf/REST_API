import { Component, ViewChild, ElementRef } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from "@angular/forms"
import {UsersService} from "src/app/services/usuarios.services"
import { ClassUsers} from '../../models/Usuarios';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    @ViewChild('miElemento') miCuadro!: ElementRef

    FormRegistro: FormGroup
    regexAlfabetico = /^[A-Za-z ]+$/
    regexsoloNumeros = /^[0-9 ]+$/
    regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    constructor(private fb:FormBuilder, private _usersService:UsersService){
        this.FormRegistro = this.fb.group({
            First_Name: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            Last_Name: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            Email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            Password: ['', [Validators.required, Validators.pattern(/.*/)]]
        })
    }
    enviarRegistro(){
        let formularioData : ClassUsers = this.FormRegistro.value
        console.log(formularioData)
        this._usersService.postUser(formularioData).subscribe(data => {
            alert("Personaje Creado!")
        }, error => {
            console.log(error)
        })
    }
    CambiarColor(){
        this.miCuadro.nativeElement.classList.add('amarillo')
        this.miCuadro.nativeElement.classList.remove('negro')
    }
}
