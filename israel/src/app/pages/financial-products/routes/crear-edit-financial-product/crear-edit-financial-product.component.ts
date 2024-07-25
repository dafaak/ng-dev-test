import { Component, inject, Input, input, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FinancialProductHttpService, ToastService, toastType } from "../../../../services";
import { NgClass } from "@angular/common";
import { FinancialProductFormComponent } from "../../components";
import { FinancialProductInterface } from "../../../../models";
import { ActivatedRoute, Router } from "@angular/router";


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
export class CrearEditFinancialProductComponent implements OnInit {

  product = signal<FinancialProductInterface | undefined>(undefined);
  private financialProductsService = inject(FinancialProductHttpService);
  private toastService = inject(ToastService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  productId = this.activatedRoute.snapshot.params['productId'];

  ngOnInit() {

    if (this.productId) {
      console.log('entro en tiene id')
      this.getProductById(this.productId as string);
    }
  }

  getProductById(productId: string) {
    this.financialProductsService.getFinancialProductById(productId)
      .subscribe({
        next: res => {
          console.log(res);
          this.product.set(res);
        }, error: err => {
          console.log(err);
        }
      })
  }

  handleFormSubmit(financialProduct: FinancialProductInterface) {
    this.createProduct(financialProduct);
  }

  handleCancel() {
    this.router.navigate(['financial-products']);
  }

  createProduct(financialProduct: FinancialProductInterface) {
    this.financialProductsService.createFinancialProduct(financialProduct)
      .subscribe(
        {
          next: () => {
            this.toastService.showToast({message: 'Producto creado', type: toastType.SUCCESS});

          },
          error: err => {
            this.toastService.showToast({message: 'Error creando producto', type: toastType.ERROR});
            console.error('Error creando producto: ', err);
          }
        }
      )
  }

}
