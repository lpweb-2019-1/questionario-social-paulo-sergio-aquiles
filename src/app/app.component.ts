import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dados = [];
  nome = null;
  sexo = null;
  idade: number  = null;
  cidade = null;
  id: any = null;
  

  salvar()  {
    const dado = {
      id: Math.random(),
      nome: this.nome,
      sexo: this.sexo,
      idade: this.idade,
      cidade: this.cidade,
    };
    this.dados.push(dado);
    this.nome= null;
    this.sexo= null;
    this.idade= null;
    this.cidade= null;
}

lista(){
  return this.dados;
  }

}