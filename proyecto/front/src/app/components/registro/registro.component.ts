import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { UsersService } from "src/app/services/usuarios.service"
import { ClassUsers } from '../../models/Usuarios';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'



@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    @ViewChild('miElemento') miCuadro!: ElementRef
    FormRegistro: FormGroup
    regexAlfabetico = /^[A-Za-z ]+$/
    regexsoloNumeros = /^[0-9 ]+$/
    regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    idUser_routing: string | null
    tituloPagina: string = 'Sign Up'
    txtbtn: string = 'Create Account'

    constructor(private fb: FormBuilder, private _usersService: UsersService, private router: Router, private UserIdRoute: ActivatedRoute) {
        this.FormRegistro = this.fb.group({
            First_Name: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            Last_Name: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            Email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            Password: ['', [Validators.required, Validators.pattern(/.*/)]]
        })

        this.idUser_routing = this.UserIdRoute.snapshot.paramMap.get('id')

    }

    ngOnInit(): void {
        this.accionSolicitada()
    }
    enviarRegistro() {
        if (this.idUser_routing == null) {
            let formularioData: ClassUsers = this.FormRegistro.value
            console.log(formularioData)
            this._usersService.postUser(formularioData).subscribe(data => {
                Swal.fire('Usuario Creado!')
                this.router.navigate(['/Login-app'])
            }, error => {
                console.log(error)
            })
        } else {
            this._usersService.putUser(this.idUser_routing, this.FormRegistro.value).subscribe(data => {
                Swal.fire('Usuario Updated!')
                this.router.navigate(['/inicio-app'])
            })
        }
    }

    accionSolicitada() {
        if (this.idUser_routing != null) {
            this.tituloPagina = "Update Information"
            this.txtbtn = "save"
            this._usersService.getUser(this.idUser_routing).subscribe(APICall => {
                this.FormRegistro.setValue({
                    First_Name: APICall.First_Name,
                    Last_Name: APICall.Last_Name,
                    Email: APICall.Email,
                    Password: ''
                })
            }, error => {
                this.router.navigate(['/nicio-app'])
            })
        }
    }

}
