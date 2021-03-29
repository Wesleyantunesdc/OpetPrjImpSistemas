import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { Usuario, UsuarioService } from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formConectar',{static:true}) formConectar:NgForm;
  public usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) {}

  ngOnInit(): void {
    this.usuario = new Usuario();
   // this.usuarioService.cadastrar(new Usuario(124312312,"wesley","123"));
  }

  realizarLogin(): void{
    console.log(this.usuario.username+"/"+this.usuario.senha)
    if(this.usuario.username!="" && this.usuario.senha !=""){
      let entrar: boolean;
      entrar = this.usuarioService.autenticar(this.usuario);
      if(entrar){
        window.alert("Usuario autenticado com sucesso!");
      }else{
        window.alert("Username ou senha errado, tente novamente!");
      }
      
    }else{
      window.alert("Preencha os campos corretamente!");
    }
  }
  
}
