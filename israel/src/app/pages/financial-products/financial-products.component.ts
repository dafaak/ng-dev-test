import { Component, inject } from '@angular/core';
import { ProductsTableComponent } from "./components";
import { FinancialProductHttpService } from "../../services";
import { AsyncPipe } from "@angular/common";
import { TableFooterComponent } from "../../shared/table-footer/table-footer.component";
import { tap } from "rxjs";
import { environment } from "../../../environments/environment.development";

@Component({
  selector: 'app-financial-products',
  standalone: true,
  imports: [ProductsTableComponent, AsyncPipe, TableFooterComponent],
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

  handleAmountChange(amount: number) {
    this.amountOfRecordsToShow = amount;
  }
}
