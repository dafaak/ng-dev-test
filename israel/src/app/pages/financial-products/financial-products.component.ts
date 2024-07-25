import { Component, inject } from '@angular/core';
import { ProductsTableComponent } from "./components";

@Component({
  selector: 'app-financial-products',
  standalone: true,
  imports: [ProductsTableComponent],
  templateUrl: './financial-products.component.html',
  styleUrl: './financial-products.component.scss'
})
export class FinancialProductsComponent {



}
