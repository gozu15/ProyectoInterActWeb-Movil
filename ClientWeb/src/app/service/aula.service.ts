import { Injectable } from '@angular/core';
import { Ruta } from '../layouts/web-layout/ruta-global';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aula } from '../models/aula';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  urlAula: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.urlAula = Ruta.url + 'Aulas';
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  }
  CrearAula(Aula: any): Observable<Aula> {
    return this.http.post<Aula>(this.urlAula, Aula, this.httpOptions);
  }

  getAulas(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.urlAula);
  }

  GetAula(id: string): Observable<Aula> {
    return this.http.get<Aula>(this.urlAula + '/' + id);
  }

  buscarAula(termino: string): Observable<Aula> {
    return this.http.post<Aula>(this.urlAula, termino, this.httpOptions);
  }
  

  ActualizarAula(Aula: Aula, id: string): Observable<Aula> {
    return this.http.put<Aula>(this.urlAula + '/' + id, Aula, this.httpOptions);
  }
}
