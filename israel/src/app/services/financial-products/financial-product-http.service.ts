import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";
import { FinancialProductInterface } from "../../models";
import { filter, map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FinancialProductHttpService {
  private mainUrl = environment.URL;
  private financialProductsUrl = this.mainUrl + 'bp/products';
  private httpClient = inject(HttpClient);

  getFinancialProducts(_busqueda?: string): Observable<FinancialProductInterface[]> {
    const res$ = this.httpClient.get<FinancialProductInterface[]>(`${this.financialProductsUrl}`)

    if (_busqueda) {
      return res$.pipe(
        map(products => {
          return products.filter(product => product.name.toLowerCase().includes(_busqueda.toLowerCase()));
        })
      )
    }
    return res$;
  }

  validateId(id: string): Observable<boolean> {
    const params = new HttpParams().set('id', id);

    return this.httpClient.get<boolean>(`${this.financialProductsUrl}/verification`, {params});
  }


}
