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

  /**
   * O construtor da classe
   * @param dados Uma instânia de QuestionarioManagerService
   */
  constructor(private dados: QuestionarioManagerService) {
  }

  /**
   * Obtém os dados vinculados ao formulário e interage com o serviço
   * QuestionarioManagerService para salvar a notícia.
   * 
   * @param form Uma referência ao formulário declarado no template
   */
  salvar(form) {
    this.dados.salvar(this.nome, this.idade, this.sexo, this.cidade);
    form.reset();
  }

}

