import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor( private router:Router) {
  }

  ngOnInit(): void {
  }

  abrirTelaLogin(){
    this.router.navigate(['/conta/login']);
  }
}
