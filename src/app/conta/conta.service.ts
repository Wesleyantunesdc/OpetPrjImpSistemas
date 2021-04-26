import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../modelos/curso';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  readonly apiURL : string;

  constructor(private http : HttpClient) {
    this.apiURL = 'https://opet-prj-imp-sistemas-backend.herokuapp.com'
   }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario>{
    console.log(usuario)
      return this.http.post<Usuario>(`${this.apiURL}/usuarios`,usuario);
  }

  public listarCursos(){
    return this.http.get<Array<any>>(`${this.apiURL}/cursos`)
  }


}
