import { Docente } from './../models/docente';
import { Tutor } from './../models/tutor';
import { Login } from './../models/login';
import { Usuario } from './../models/viewmodels/usuario';
import { Injectable } from '@angular/core';
import { Ruta } from './../layouts/web-layout/ruta-global';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from '../models/estudiante';
import { AbstractWebDriver } from 'protractor/built/browser';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlUsuarios: string;
  urlDocente: string;
  urlLogin: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  public UsuarioActual:any;
  constructor(private http: HttpClient) {
    if(this.UsuarioActual !=undefined){
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',"Authorization":this.UsuarioActual})
    };
  };
    this.urlLogin = Ruta.url + 'inicio';
    this.urlUsuarios = Ruta.url + 'usuarios/';
    // this.urlDocente = Ruta.url + "docentes";
  }


  //USUARIO SOLO CAMBIA PARAMETROS.
  BorrarUsuario(id, razon,modificacion) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',"Authorization":this.UsuarioActual.token})
    };
    return this.http.delete<Usuario>(this.urlUsuarios + id + "/?razon=" + razon+"&fecha="+modificacion,this.httpOptions);
  }
  ActualizarUsuario(id, datos): Observable<any> {
    console.log(id,datos);
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',"Authorization":this.UsuarioActual.token})
    };

    return this.http.put<any>(this.urlUsuarios + id, datos, this.httpOptions);
  }
  BuscarUsuario(parametro: any): Observable<any> {
    return this.http.put<any>(this.urlUsuarios, parametro, this.httpOptions);
  }

  getUsuario(id){
     return this.http.get<any>(this.urlUsuarios+id);
  }

  //ESTUDIANTE
  RegistrarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.urlUsuarios, estudiante, this.httpOptions);
  }
  getEstudiantes(parametro: any): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.urlUsuarios + '?rol=estudent&sort=' + parametro.sort + '&order=' + parametro.order);
  }
  RegistrarTutor(tutor: Tutor) {
    return this.http.post<Estudiante>(this.urlUsuarios, tutor, this.httpOptions);
  }

  //LOGIN
  Login(login: Login): Observable<any> {
    return this.http.post<any>(this.urlLogin, login, this.httpOptions);
  }
//LOGIN
cerrarSecion(id:string):Observable<any> {
  return this.http.post<any>(this.urlLogin+"/"+id, this.httpOptions);
}

  // DOCENTE
  RegistrarDocente(docente: Docente) {
    console.log(this.UsuarioActual.token);
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',"Authorization":this.UsuarioActual.token})
    };

    console.log(this.httpOptions);
    return this.http.post<Docente>(this.urlUsuarios, docente, this.httpOptions);
  }
  getDocentes(parametro: any): Observable<Docente[]> {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',"Authorization":this.UsuarioActual.token})
    };

    return this.http.get<Docente[]>(this.urlUsuarios + '?rol=doc&sort=' + parametro.sort + '&order=' + parametro.order,this.httpOptions);
  }

}
