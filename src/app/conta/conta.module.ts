import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsuarioService}  from './shared';
import { LoginComponent } from './login'
import {FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UsuarioService]
})
export class ContaModule { }
