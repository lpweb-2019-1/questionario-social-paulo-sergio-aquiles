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

  estatisticasDeCidade() {
    let estatisticas = [];
    let estatisticasIdx = {};
    for (const cidade of this.cidades) {
      estatisticasIdx[cidade] = estatisticas.length;
      estatisticas.push({ nome: cidade, valor: 0 });
    }
    for (const dado of this.dados) {
      estatisticas[estatisticasIdx[dado.cidade]].valor++;
    }
    return estatisticas;
  }


  /**
   * Calcula e retorna as estatísticas das notícias
   * em categorias, ou seja, para cada categoria de notícia,
   * qual a quantidade de notícias da mesma.
   */
  /*
  estatisticasDeCategorias() {
    let estatisticas = [];
    let estatisticasIdx = {};
    for (const noticia of this.dados) {
      estatisticas[estatisticasIdx[noticia.categoria]].valor++;
    }
    return estatisticas;
  }*/
}
