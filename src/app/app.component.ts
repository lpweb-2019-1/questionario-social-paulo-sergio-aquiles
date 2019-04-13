import { Component } from '@angular/core';
import { QuestionarioManagerService } from './questionario-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nome = null;
  idade: number = null;
  sexo = null;
  cidade = null;

  constructor(private dados: QuestionarioManagerService) {
  }

  salvar(form) {
    this.dados.salvar(this.nome, this.idade, this.sexo, this.cidade);
    form.reset();
  }

}

