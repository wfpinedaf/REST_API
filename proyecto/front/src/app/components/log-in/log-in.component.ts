import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { UsersService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
    @ViewChild('ElementoLogIn') MyLogIn!: ElementRef

    FormLogIn!: FormGroup

    UserFormLogIn = {
        Email: '',
        Password: ''
    }
    regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    constructor(private fb: FormBuilder, private _userService: UsersService, private router: Router) {
        this.FormLogIn = this.fb.group({
            Email: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            Password: ['', [Validators.required, Validators.pattern(/.*/)]]
        })
    }

    ingresoUsuario() {
        this._userService.postIngresoCuenta(this.UserFormLogIn).subscribe(respuestaAPI => {
            let tokenGenerado = respuestaAPI.token
            sessionStorage.setItem('tokenIngreso', respuestaAPI.token)
            this._userService.postDesencriptarToken(tokenGenerado).subscribe(respuesaAPI2 => {
                sessionStorage.setItem('infousuario', JSON.stringify(respuesaAPI2.decodedPayload))
                this.router.navigate(['/'])
            })
        }, erro => {
            Swal.fire({
                icon: 'error',
                title: 'Usuario y/o contraseña inválidos',
                iconColor: '#ff0d0d'
            })
            console.log(erro)
        })
    }

}
