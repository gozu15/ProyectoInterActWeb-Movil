import { Docente } from './../models/docente';
import { Tutor } from './../models/tutor';
import { Login } from './../models/login';
import { Usuario } from './../models/viewmodels/usuario';
import { Injectable } from '@angular/core';
import { Ruta } from './../layouts/web-layout/ruta-global';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from '../models/estudiante';

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
    this.urlUsuarios = Ruta.url + 'usuarios/';
    // this.urlDocente = Ruta.url + "docentes";
  }

  getEstudiantes(parametro:any): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.urlUsuarios+'?rol=estudent&sort='+parametro.sort+'&order='+parametro.order);
  }

  getDocentes(parametro:any): Observable<any[]> {
    return this.http.get<any[]>(this.urlUsuarios+'?rol=doc&sort='+parametro.sort+'&order='+parametro.order);
  }
  BorrarUsuario(id,razon){
    return this.http.delete<Usuario>(this.urlUsuarios+id+"/?razon="+razon);
  }
  ActualizarUsuario(id,datos): Observable<any>{
    return this.http.post<any>(this.urlUsuarios+id,datos, this.httpOptions);
  }
BuscarUsuario(parametro:any): Observable<any>{
  return this.http.post<any>(this.urlUsuarios,parametro, this.httpOptions);
}
  RegistrarEstudiante(estudiante:Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.urlUsuarios,estudiante, this.httpOptions);
  }
  RegistrarTutor(tutor:Tutor){
    return this.http.post<Estudiante>(this.urlUsuarios,tutor, this.httpOptions);
  }
  RegistrarDocente(docente:Docente){
    return this.http.post<Docente>(this.urlUsuarios,docente, this.httpOptions);
  }
  Login(login: Login): Observable<any> {
    return this.http.post<any>(this.urlLogin, login, this.httpOptions);
  }

}
