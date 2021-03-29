import { Injectable } from '@angular/core';
import { Usuario } from  './usuario.model'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  autenticar(usuario : Usuario): boolean{
    const usuarios: Usuario[] = this.listarTodosUsuarios();
    let logar: boolean;
    usuarios.forEach((obj, index, objs) =>{
      if(usuario.username === obj.username && usuario.senha === obj.senha){
        logar = true;
      }else{
        logar =  false;
      }
    })
    return logar;
  }

  listarTodosUsuarios(): Usuario[]{
    const usuarios = localStorage['usuarios'];
    return usuarios ? JSON.parse(usuarios): [];
  }

  cadastrar(usuario: Usuario):void{
    const usuarios = this.listarTodosUsuarios();
    usuario.id = new Date().getTime()
    usuarios.push(usuario);
    localStorage['usuarios'] = JSON.stringify(usuarios);
  }
}
