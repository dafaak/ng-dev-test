import { Component, inject, input } from '@angular/core';
import { FinancialProductInterface } from "../../../../models";
import { FinancialProductHttpService } from "../../../../services";
import { Observable } from "rxjs";
import { AsyncPipe, SlicePipe } from "@angular/common";
import { FallbackImageDirective } from "../../../../directives/fallback-image/fallback-image.directive";

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [
    AsyncPipe,
    SlicePipe,
    FallbackImageDirective
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss'
})
export class ProductsTableComponent {
  fallbackImage = '/assets/images/default-product-icon.svg';

  private financialProductsService = inject(FinancialProductHttpService);
  financialProducts$: Observable<FinancialProductInterface[]> = this.financialProductsService.getFinancialProducts();

  constructor() {
  }


}
