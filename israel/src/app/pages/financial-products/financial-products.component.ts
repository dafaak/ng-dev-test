import { Component, inject } from '@angular/core';
import { ProductsTableComponent } from "./components";
import { FinancialProductHttpService } from "../../services";
import { AsyncPipe } from "@angular/common";
import { tap } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { Router } from "@angular/router";
import { SearchBarComponent, TableFooterComponent } from "../../shared";

@Component({
  selector: 'app-financial-products',
  standalone: true,
  imports: [ProductsTableComponent, AsyncPipe, TableFooterComponent, SearchBarComponent],
  templateUrl: './financial-products.component.html',
  styleUrl: './financial-products.component.scss'
})
export class FinancialProductsComponent {
  totalRecords = 0;

  amountOfRecordsToShow = environment.DEFAULT_RECORDS_TO_SHOW;

  private financialProductsService = inject(FinancialProductHttpService);

  financialProducts$ = this.financialProductsService.getFinancialProducts().pipe(
    tap(res => this.totalRecords = res.length)
  );

  private router = inject(Router);

  handleAmountChange(amount: number) {
    this.amountOfRecordsToShow = amount;
  }

  handleSearchChange(textSearch: string) {
    this.financialProducts$ = this.financialProductsService.getFinancialProducts(textSearch).pipe(
      tap(res => this.totalRecords = res.length)
    );
  }

  navToCreate() {
    this.router.navigate(['financial-products', 'create'])
  }

  navToEdit(productId: string) {
    this.router.navigate(['financial-products', 'edit', productId]);
  }
}
