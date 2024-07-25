import { Component,  input } from '@angular/core';
import { FinancialProductInterface } from "../../../../models";
import { AsyncPipe, SlicePipe } from "@angular/common";
import { FallbackImageDirective } from "../../../../directives/fallback-image/fallback-image.directive";

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [
    AsyncPipe,
    SlicePipe,
    FallbackImageDirective,
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss'
})
export class ProductsTableComponent {
  fallbackImage = '/assets/images/default-product-icon.svg';

  financialProducts = input<FinancialProductInterface[]|null>();

  constructor() {
  }


}
