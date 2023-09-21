import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {PersonajesService } from "src/app/services/personajes.service"

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
    constructor(private _personajeService:PersonajesService ){

    }
    ngOnInit():void{
        this.ObtenerPersonaje()
    }

    ObtenerPersonaje(){
        this._personajeService.getPersonajes().subscribe(data =>{
            console.log(data)
        }, error =>{
            console.log(error)
        })
    }
}
