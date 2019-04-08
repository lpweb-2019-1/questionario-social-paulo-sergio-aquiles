import { Component } from '@angular/core';
import { QuestionarioManagerService } from './questionario-manager.service';

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
  masculino: boolean = null;
  feminino: boolean = null;
  

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

