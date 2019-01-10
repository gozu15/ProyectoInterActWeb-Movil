import { Login } from './../models/login';
import { Usuario } from './../models/viewmodels/usuario';
import { Injectable } from '@angular/core';
import { Ruta } from './../layouts/web-layout/ruta-global';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlUsuarios: string;
  urlDocente: string;
  urlLogin:string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    this.urlLogin= Ruta.url+'inicio';


    this.urlUsuarios = Ruta.url + 'usuarios';
    // this.urlDocente = Ruta.url + "docentes";
  }

  getEstudiantes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlUsuarios);
  }

  getDocentes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlDocente);
  }

  Login(login: Login): Observable<any> {
    return this.http.post<any>(this.urlLogin, login, this.httpOptions);
  }

}
