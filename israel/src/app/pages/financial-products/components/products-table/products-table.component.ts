import { Component, input, output } from '@angular/core';
import { FinancialProductInterface } from "../../../../models";
import { AsyncPipe, SlicePipe } from "@angular/common";
import { FallbackImageDirective } from "../../../../directives/fallback-image/fallback-image.directive";
import { environment } from "../../../../../environments/environment.development";
import { DropdownComponent } from "../../../../shared/dropdown/dropdown.component";
import { DropdownOptionInterface } from "../../../../shared/dropdown/models/dropdown-option.interface";
import { ShowContentDirective } from "../../../../shared/dropdown/directive/show-content.directive";
import { outputToObservable } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [
    AsyncPipe,
    SlicePipe,
    FallbackImageDirective,
    DropdownComponent,
    ShowContentDirective,
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss'
})
export class ProductsTableComponent {
  fallbackImage = '/assets/images/default-product-icon.svg';

  financialProducts = input<FinancialProductInterface[] | null>();

  amountOfRecordsToShow = input<number>(environment.DEFAULT_RECORDS_TO_SHOW);

  editProductEvent = output<string>();

  context = this;
  itemsDropdown: DropdownOptionInterface[] = [
    {
      label: 'EDITAR',
      callback: (data) => {
        this.editProduct(data);
      }
    },
  ]

  editProduct(data: FinancialProductInterface) {
    this.editProductEvent.emit(data.id);
  }

}
