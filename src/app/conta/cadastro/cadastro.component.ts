import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' 
import { VirtualTimeScheduler } from 'rxjs';
import { Usuario} from 'src/app/modelos/usuario';
import {Curso} from '../../modelos/curso';
import {ContaService} from '../conta.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cs: String;
  public usuario: Usuario;
  public cursos: Array<any>;

  constructor( private router:Router, private contaService:ContaService) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario()
    this.contaService.listarCursos().subscribe(resposta => this.cursos = resposta)
  }

  cadastrar(){
    let curso:Curso = new Curso(this.cs);
    //this.usuario.curso = curso;
    this.contaService.cadastrarUsuario(this.usuario).subscribe(
      response =>{
        alert("Salvo com sucesso!")
      },
      error =>{
        alert("Erro ao salvar")
      }
    )
  }

  abrirTelaLogin(){
    this.router.navigate(['/conta/login']);
  }
}
