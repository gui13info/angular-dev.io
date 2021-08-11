import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Produto } from "./produto";

@Injectable()
export class ProdutoService {

    public constructor(
        private http: HttpClient
    ) { }

    protected UrlService: string = "http://localhost:3001/";

    public obterProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.UrlService + 'produtos');
    }
}