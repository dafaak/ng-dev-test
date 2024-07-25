import { Component, inject } from '@angular/core';
import { ProductsTableComponent } from "./components";
import { FinancialProductHttpService } from "../../services";
import { AsyncPipe } from "@angular/common";
import { TableFooterComponent } from "../../shared/table-footer/table-footer.component";

@Component({
  selector: 'app-financial-products',
  standalone: true,
  imports: [ProductsTableComponent, AsyncPipe, TableFooterComponent],
  templateUrl: './financial-products.component.html',
  styleUrl: './financial-products.component.scss'
})
export class FinancialProductsComponent {

  private financialProductsService = inject(FinancialProductHttpService);
  financialProducts$ = this.financialProductsService.getFinancialProducts();

  handleAmountChange(amount: number) {
    console.log(amount);
  }
}
