import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudante } from './estudante';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient) { }

  url : string = "http://localhost:3000/estudantes";
  estudantes(): Observable<Estudante[]> {

      return this.http.get<Estudante[]>(this.url);
  }

  adicionar(newClient : Estudante): Observable<Estudante> {
    return this.http.post<Estudante>(this.url, newClient);
  }
}
