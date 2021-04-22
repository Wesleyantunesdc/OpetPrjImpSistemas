import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsuarioService}  from './shared';
import { LoginComponent } from './login'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro';


@NgModule({
  declarations: [LoginComponent, CadastroComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UsuarioService]
})
export class ContaModule { }
