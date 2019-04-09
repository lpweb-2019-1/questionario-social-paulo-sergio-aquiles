import { Injectable } from '@angular/core';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioManagerService {
  
  dados = [];
  proximoId = 1;
  cidades = ['Palmas','Paraiso do Tocantins','Porto Nacional'];

  
  constructor() { }
  

  /**
   * O método recebe os dados , cria um objeto e o adiciona
   * na lista de dados
    
   * @param nome nome
   * @param idade idade
   * @param sexo sexo*/
  /**
   * @param cidade() cidade
   */

   
      
   
  salvar(nome: string, idade: number, sexo: string, cidade: string) {
    const dado = {
      id: this.proximoId,
      nome: nome,
      idade: idade,
      sexo: sexo,
      cidade: cidade,
    };

    this.dados.push(dado);

    this.proximoId++;
  }


  lista() {
    return this.dados;
  }


  listaDasCidades() {
    return this.cidades;
  }


  PessoaMaisNova() {
    let pessoa = null;
    if (this.dados.length === 0) {
      return pessoa;
    }
    let menorIdade = this.dados[0].idade;
    pessoa = this.dados[0]
    for (let i = 1; i < this.dados.length; i++){
      if (menorIdade >= this.dados[i].idade){
        menorIdade = this.dados[i].idade;
        pessoa = this.dados[i];
      }
    }
    return pessoa;
  }

  PessoaMaisVelha() {
    let pessoa = null;
    if (this.dados.length === 0) {
      return pessoa;
    }
    let maiorIdade = this.dados[0].idade;
    pessoa = this.dados[0]
    for (let i = 1; i < this.dados.length; i++){
      if (maiorIdade <= this.dados[i].idade){
        maiorIdade = this.dados[i].idade;
        pessoa = this.dados[i];
      }
    }
    return pessoa;
  }


}
