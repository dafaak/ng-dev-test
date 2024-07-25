import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FinancialProductsComponent } from "./financial-products.component";


export const routes: Routes = [
  {
    path: '',
    component: FinancialProductsComponent
  }
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FinancialProductsRoutingModule {
}
