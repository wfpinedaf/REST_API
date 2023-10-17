import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassUsers} from '../models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    url = "http://localhost:3000/api/v1"

  constructor(private http: HttpClient) {}

  getUsers():Observable<any>{
    return this.http.get(`${this.url}/get-user`)
  }
  getPUser():Observable<any>{
    return this.http.get(`${this.url}/get-user/:id`)
  }
  postUser(DataUsuario : ClassUsers):Observable<any>{
    return this.http.post(`${this.url}/create-user`, DataUsuario)
  }

  getUsersList():Observable<any>{
        return this.http.get(`${this.url}/get-user`)
  }


}
