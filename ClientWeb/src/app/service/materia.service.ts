import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from './../layouts/web-layout/ruta-global';
import { Materia } from '../models/materia';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  urlMateria: string;
  constructor(private http: HttpClient) {
    this.urlMateria = Ruta.url + 'materias';

  }
  CrearMateria(materia: any): Observable<Materia> {
    return this.http.post<Materia>(this.urlMateria, materia, httpOptions);
  }

  getMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.urlMateria);
  }

  GetMateria(id: string): Observable<Materia> {
    return this.http.get<Materia>(this.urlMateria + '/' + id);
  }

  buscarMateria(termino: string): Observable<Materia> {
    return this.http.post<Materia>(this.urlMateria, termino, httpOptions);
  }

  ActualizarMateria(materia: Materia, id: string): Observable<Materia> {
    return this.http.put<Materia>(this.urlMateria + '/' + id, materia, httpOptions);
  }

  
  BorrarMateria(id, razon,modificacion) {
    // this.httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json',"Authorization":this.UsuarioActual.token})
    // };
    return this.http.delete<Materia>(this.urlMateria +"/"+ id + "/?razon=" + razon+"&fecha="+modificacion,httpOptions);
  }
}
