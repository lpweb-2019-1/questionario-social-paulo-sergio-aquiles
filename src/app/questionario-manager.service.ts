import { Injectable } from '@angular/core';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { ɵangular_packages_forms_forms_a } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioManagerService {
  
  dados = [];

  cidades = ['Palmas','Paraiso do Tocantins','Porto Nacional'];

  
  constructor() {
    if (localStorage.getItem('pessoas')) {
      this.dados = JSON.parse(localStorage.getItem('pessoas'));
    }
  }
    
  salvar(nome: string, idade: number, sexo: string, cidade: string) {
    const dado = {
      nome: nome,
      idade: idade,
      sexo: sexo,
      cidade: cidade,
    };

    this.dados.push(dado);
    this.setInLocalStorage('pessoas', this.dados);

  }
  setInLocalStorage(key: string, data: any) {
    try {
      localStorage.setItem('pessoas', JSON.stringify(this.dados));
    } catch (e) {
      console.error('Erro ao salvar dados no Local Storage!', e);
    }
  }

  getFromLocalStorage(key: string) {
    try {
      return JSON.parse(localStorage.getItem('pessoas'));
    } catch (e) {
      console.error('Erro ao obter dados do Local Storage!', e);
      return null;
    }
  }

  lista() {
    return this.dados;
  }


  listaDasCidades() {
    return this.cidades;
  }


  CalculoIdade() {
    let pessoa_V = null;
    let pessoa_N = null;
    const pessoas = JSON.parse(localStorage.getItem('pessoas'));
    if (pessoas.length === 0) {
      return null;
    }
    let menorIdade = pessoas[0].idade;
    let maiorIdade = pessoas[0].idade;
    pessoa_V = pessoas[0]
    pessoa_N = pessoas[0]
    for (let i = 1; i < pessoas.length; i++){
      if (menorIdade >= pessoas[i].idade){
        menorIdade = pessoas[i].idade;
        pessoa_N = pessoas[i];
      }
      if (maiorIdade <= pessoas[i].idade){
        maiorIdade = pessoas[i].idade;
        pessoa_V = pessoas[i];
      }
    }
    const pessoa = {
      pessoa_V,
      pessoa_N
    }
    return pessoa;
  }

  calcularMediaIdade(){
    var media_idade_homens = 0;
    var media_idade_mulheres = 0;
    var cont_mulher = 0;
    var cont_homem = 0;
    var idade_homem = 0;
    var idade_mulher = 0;
    const pessoas = JSON.parse(localStorage.getItem('pessoas'));
    for (let pessoa of pessoas){
      if (pessoa.sexo == "masculino"){
        idade_homem = idade_homem + pessoa.idade
        cont_homem = cont_homem +1
      }
      else {
        idade_mulher = idade_mulher + pessoa.idade
        cont_mulher = cont_mulher +1
      }
    }
    if(cont_mulher >=1){
      media_idade_mulheres = idade_mulher / cont_mulher;
    }
    if(cont_homem >=1){
      media_idade_homens = idade_homem / cont_homem;
    }
    const pessoa = {
      media_idade_homens,
      media_idade_mulheres
    }
    return pessoa;
  }

  calcularMediaCidade(){
    var palmas = 0;
    var paraiso = 0;
    var porto = 0;
    var cont_palmas = 0;
    var cont_paraiso = 0;
    var cont_porto = 0;
    var idade_palmas = 0;
    var idade_paraiso = 0;
    var idade_porto = 0;
    const pessoas = JSON.parse(localStorage.getItem('pessoas'));
    for (let pessoa of pessoas){
      if (pessoa.cidade == "Palmas"){
        idade_palmas = idade_palmas + pessoa.idade
        cont_palmas = cont_palmas+1
      }
      if (pessoa.cidade == "Paraiso do Tocantins"){
        idade_paraiso = idade_paraiso + pessoa.idade
        cont_paraiso = cont_paraiso+1
      }
      if (pessoa.cidade == "Porto Nacional"){
        idade_porto = idade_porto + pessoa.idade
        cont_porto = cont_porto+1
      }
    }
    if(cont_palmas >=1){
      palmas = idade_palmas / cont_palmas;
    }
    if(cont_paraiso >=1){
      paraiso = idade_paraiso / cont_paraiso;
    }
    if(cont_porto >=1){
      porto = idade_porto / cont_porto;
    }
    const pessoa = {
      palmas,
      paraiso,
      porto
    }
    return pessoa;
  }

  calcularPorcentagemCidade(){
    var palmas_h = 0;
    var paraiso_h = 0;
    var porto_h = 0;
    var palmas_m = 0;
    var paraiso_m = 0;
    var porto_m = 0;
    var homem_palmas = 0;
    var homem_paraiso = 0;
    var homem_porto = 0;
    var mulher_palmas = 0;
    var mulher_paraiso = 0;
    var mulher_porto = 0;
    const pessoas = JSON.parse(localStorage.getItem('pessoas'));
    for (let pessoa of pessoas){
      if (pessoa.cidade == "Palmas"){
        if (pessoa.sexo == "masculino"){
          homem_palmas = homem_palmas+1
        }
        else {
          mulher_palmas = mulher_palmas+1
        }
      }
      if (pessoa.cidade == "Paraiso do Tocantins"){
        if (pessoa.sexo == "masculino"){
          homem_paraiso = homem_paraiso+1
        }
        else {
          mulher_paraiso = mulher_paraiso+1
        }
      }
      if (pessoa.cidade == "Porto Nacional"){
        if (pessoa.sexo == "masculino"){
          homem_porto = homem_porto+1
        }
        else {
          mulher_porto = mulher_porto+1
        }
      }
    }
    if(homem_palmas >=1){
      palmas_h = (homem_palmas/(homem_palmas+mulher_palmas))*100 ;
    }
    if(mulher_palmas >=1){
      palmas_m = (mulher_palmas/(homem_palmas+mulher_palmas))*100 ;
    }
    if(homem_paraiso >=1){
      paraiso_h = (homem_paraiso/(homem_paraiso+mulher_paraiso))*100 ;
    }
    if(mulher_paraiso >=1){
      paraiso_m = (mulher_paraiso/(homem_paraiso+mulher_paraiso))*100 ;
    }
    if(homem_porto >=1){
      porto_h = (homem_porto/(homem_porto+mulher_porto))*100 ;
    }
    if(mulher_porto >=1){
      porto_m = (mulher_porto/(homem_porto+mulher_porto))*100 ;
    }
    const pessoa = {
      palmas_h,
      paraiso_h,
      porto_h,
      palmas_m,
      paraiso_m,
      porto_m
    }
    return pessoa;
  }

}
