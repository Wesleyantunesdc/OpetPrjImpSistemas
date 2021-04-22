import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsuarioService}  from './shared';
import { LoginComponent } from './login'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro';

import { MatInputModule } from'@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [LoginComponent, CadastroComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [UsuarioService]
})
export class ContaModule { }
