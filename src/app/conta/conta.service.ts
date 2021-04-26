import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  public cadastrarUsuario(usuario: Usuario): Usuario{
    console.log(usuario)
    return usuario;
  }

  public listarCursos():void{
    this.http.get(`${this.apiURL}/cursos`)
      .subscribe(
        resultado => {
          console.log(resultado)
        },
        erro => {
          console.log("Erro ao recuperar cursos")
        }
      )
  }
}
