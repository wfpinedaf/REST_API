import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassUsers } from '../models/Usuarios';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    url = "http://localhost:3000/api/v1"

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get(`${this.url}/get-user`)
    }

    postUser(DataUsuario: ClassUsers): Observable<any> {
        return this.http.post(`${this.url}/create-user`, DataUsuario)
    }

    getUsersList(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('tokenIngreso')}`)
        return this.http.get(`${this.url}/get-users`, { headers })
    }

    deleteUser(idUser: string): Observable<any> {
        return this.http.delete(`${this.url}/delete-single-user/${idUser}`)
    }

    getUser(idUser: string): Observable<any> {
        return this.http.get(`${this.url}/get-user/${idUser}`)
    }

    putUser(idUser: string, dataUser: ClassUsers): Observable<any> {
        return this.http.put(`${this.url}/update-single-user/${idUser}`, dataUser)
    }

    estaLogueado() {
        return (sessionStorage.getItem('tokenIngreso') != null ? true : false)
    }

    postIngresoCuenta(dataLogin: object): Observable<any> {
        return this.http.post(`${this.url}/ingreso`, dataLogin)
    }
    postDesencriptarToken(token: string): Observable<any> {
        return this.http.post(`${this.url}/infotoken`, { tokenUser: token })
    }
}
