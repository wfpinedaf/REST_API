import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
    url = "http://localhost:3000/api/v1"

  constructor(private http: HttpClient) {}

    // Debemos usar el metodo async pero no se va a colocar como tal async

  getPersonajes():Observable<any>{
    return this.http.get(`${this.url}/obtener-Personaje`)
  }
  getPersonaje():Observable<any>{
    return this.http.get(`${this.url}/buscar-Personaje/:id`)
  }
//   postPersonaje():Observable<any>{
//     return this.http.post(`${this.url}/CrearPersonaje`)
//   }
//   putPersonaje():Observable<any>{
//     return this.http.put(`${this.url}/actualiza-Personaje/:id`)
//   }
//   deletePersonaje():Observable<any>{
//     return this.http.delete(`${this.url}/eliminar-personaje/:id`)
//   }
}
