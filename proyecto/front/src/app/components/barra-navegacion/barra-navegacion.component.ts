import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usuarios.service';

@Component({
    selector: 'app-barra-navegacion',
    templateUrl: './barra-navegacion.component.html',
    styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {
    constructor(public _usuarioService: UsersService, private router: Router) { }

    CerrarSession() {
        sessionStorage.removeItem('tokenIngreso')
        this.router.navigate(['/inicio-app'])
    }
}
