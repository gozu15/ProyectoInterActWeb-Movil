import { Usuario } from './../models/viewmodels/usuario';
import { Injectable } from '@angular/core';
import { Ruta } from '../ruta_globals';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlEstudiante:string;
  urlDocente:string
  constructor(private http: HttpClient) {
    this.urlEstudiante = Ruta.url + "estudiante";
    this.urlDocente = Ruta.url + "docente";

  }
  
  getEstudiantes(): Observable<Usuario[]> {
   
    return this.http.get<Usuario[]>(this.urlEstudiante);
  }
  getDocentes(): Observable<Usuario[]> {
   
    return this.http.get<Usuario[]>(this.urlDocente);
  }


}
