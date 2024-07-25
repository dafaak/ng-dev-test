import { Component, inject, output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { FinancialProductHttpService } from "../../../../services";
import { combineLatest, debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { NgClass } from "@angular/common";
import { FinancialProductFormComponent } from "../../components";
import { FinancialProductInterface } from "../../../../models";


type fieldFormErrorMessages = {
  id: string[]
  name: string[]
  description: string[]
  logo: string[]
  date_release: string[],
  [other: string]: string[],
}

@Component({
  selector: 'app-crear-edit-financial-product',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule,
    FinancialProductFormComponent
  ],
  templateUrl: './crear-edit-financial-product.component.html',
  styleUrl: './crear-edit-financial-product.component.scss'
})
export class CrearEditFinancialProductComponent {

  handleFormSubmit(financialProduct: FinancialProductInterface) {
    console.log(financialProduct);
  }

}
