import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  public produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.listarProdutos()
    .subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      }
    )
  }

}
