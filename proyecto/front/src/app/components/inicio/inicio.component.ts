import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { PersonajesService } from "src/app/services/personajes.service"
import { VideojuegoService } from "src/app/services/videojuegos.service"

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
    videojuegos: any[] = [];
    constructor(private miServicio: VideojuegoService) { }

    ngOnInit(): void {
        this.ObtenerVideojuegos();
    }

    ObtenerVideojuegos() {
        this.miServicio.getvideojuegos().subscribe(data => {
            this.videojuegos = data;
        }, error => {
            console.error(error);
        });
    }
}






