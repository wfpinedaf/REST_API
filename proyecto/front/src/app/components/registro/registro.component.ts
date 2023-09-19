import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    @ViewChild('miElemento') miCuadro!: ElementRef

    CambiarColor(){
        this.miCuadro.nativeElement.classList.add('amarillo')
        this.miCuadro.nativeElement.classList.remove('negro')
    }

}
