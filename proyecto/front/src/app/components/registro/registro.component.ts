import { Component, ViewChild, ElementRef } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from "@angular/forms"
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


    constructor(private fb:FormBuilder){
        this.formularioRegistro = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
            edad: ['', [Validators.required, Validators.pattern(this.regexsoloNumeros)]],
            url_imagen: ['assets/img/imgDefecto/png']
        })
    }

    enviarFormulario(){
        console.log("xd")
    }

    CambiarColor(){
        this.miCuadro.nativeElement.classList.add('amarillo')
        this.miCuadro.nativeElement.classList.remove('negro')
    }

}
