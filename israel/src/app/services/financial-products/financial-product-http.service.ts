import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";
import { FinancialProductInterface } from "../../models";

@Injectable({
  providedIn: 'root'
})
export class FinancialProductHttpService {
  private mainUrl = environment.URL;
  private financialProductsUrl = this.mainUrl + 'bp/products';
  private httpClient = inject(HttpClient);

  getFinancialProducts() {
    return this.httpClient.get<FinancialProductInterface[]>(`${this.financialProductsUrl}`)
    //   .pipe(
    //   map(
    //     (resp: FinancialProductInterface) => resp.data
    //   )
    // )
  }

}