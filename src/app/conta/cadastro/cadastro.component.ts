import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' 
import { Usuario } from 'src/app/modelos/usuario';
import {ContaService} from '../conta.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuario: Usuario;

  constructor( private router:Router, private contaService:ContaService) {
  }

  ngOnInit(): void {
    this.contaService.listarCursos()
    this.usuario = new Usuario()
  }

  cadastrar(){
    this.contaService.cadastrarUsuario(this.usuario)
  }

  abrirTelaLogin(){
    this.router.navigate(['/conta/login']);
  }
}
