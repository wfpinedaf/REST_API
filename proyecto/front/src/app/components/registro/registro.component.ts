import { Component, ViewChild, ElementRef } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from "@angular/forms"
import{ClassPersonajes} from "src/app/models/personajes"
import {PersonajesService} from "src/app/services/personajes.service"

// FormBuilder se determina como el encargado de manejar
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    @ViewChild('miElemento') miCuadro!: ElementRef

    formularioRegistro: FormGroup
    regexAlfabetico = /^[A-Za-z ]+$/
    regexsoloNumeros = /^[0-9 ]+$/


    constructor(private fb:FormBuilder,private _personajeService:PersonajesService){
        this.formularioRegistro = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            edad: ['', [Validators.required, Validators.pattern(this.regexsoloNumeros)]],
            url_imagen: ['assets/img/imgDefecto/png']
        })
    }

    enviarFormulario(){
        // let manera1 = this.formularioResgistro.value

        // const personajeFormulario:ClassPersonajes = {
        // nombre: this.formularioRegistro.get('nombre')!.value,
        // edad: this.formularioRegistro.get('edad')!.value,
        // urlImagen: this.formularioRegistro.get('urlImagen')!.value
        // }

        let formularioData : ClassPersonajes = this.formularioRegistro.value
        this._personajeService.postPersonaje(formularioData).subscribe(data => {
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
