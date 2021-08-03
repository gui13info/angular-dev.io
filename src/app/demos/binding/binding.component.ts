import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './binding.component.html',
  styles: []
})
export class BindingComponent {

  public contadorClique: number = 0;  
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  /* KeyUp(event: any){
    this.nome = event.target.value;
  } */

}
