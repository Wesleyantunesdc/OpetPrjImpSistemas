import { Curso } from "./curso";

export class Usuario{

    public Id: number;
    public nome: String;
    public senha: String;
    public dataNascimento: Date;
    public periodo: number;
    public curso: Curso;
}