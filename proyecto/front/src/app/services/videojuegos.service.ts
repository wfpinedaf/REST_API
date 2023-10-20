import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassVideojuego } from '../models/videojuegos';

@Injectable({
    providedIn: 'root'
})
export class VideojuegoService {
    url = "http://localhost:3000/api/v1"


    constructor(private http: HttpClient) { }
    getvideojuegos(): Observable<any> {
        return this.http.get(`${this.url}/obtenerVideojuegos`)
    }
    getvideojuego(): Observable<any> {
        return this.http.get(`${this.url}/obtenerVideojuego/:id`)
    }
    postvideojuego(videojuego: ClassVideojuego): Observable<any> {
        return this.http.post(`${this.url}/CrearVideojuego`, videojuego)
    }

}
// Debemos usar el metodo async pero no se va a colocar como tal async


//   putvideojuego():Observable<any>{
//     return this.http.put(`${this.url}/actualiza-videojuego/:id`)
//   }
//   deletevideojuego():Observable<any>{
//     return this.http.delete(`${this.url}/eliminar-videojuego/:id`)
//   }

