import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ruta } from './../ruta_globals';
import { Materia } from '../models/materia';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  urlMateria:string;
  constructor(private http: HttpClient) {
    this.urlMateria = Ruta.url + "materia";

  }
  CrearMateria(materia: any): Observable<Materia> {
   
    return this.http.post<Materia>(this.urlMateria, materia, httpOptions);
  }
  getMaterias(): Observable<Materia[]> {
   
    return this.http.get<Materia[]>(this.urlMateria);
  }
  GetMateria(id: string): Observable<Materia> {
   
    return this.http.get<Materia>(this.urlMateria + "/" + id);

  }


  buscarMateria(termino: string): Observable<Materia> {
   
    return this.http.post<Materia>(this.urlMateria, termino, httpOptions);
  }

  ActualizarMateria(materia: Materia, id: string): Observable<Materia> {
   
    return this.http.put<Materia>(this.urlMateria + "/" + id, materia, httpOptions);
  }
}
