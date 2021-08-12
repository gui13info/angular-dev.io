import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Produto[];

  public constructor(private produtoService: ProdutoService) { }

  public ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
        },
        error => { console.log(error); }
      );
  }

}
