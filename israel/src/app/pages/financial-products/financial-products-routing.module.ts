import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FinancialProductsComponent } from "./financial-products.component";
import { CrearEditFinancialProductComponent } from "./routes";



export const routes: Routes = [
  {
    path: '',
    component: FinancialProductsComponent
  },
  {
    path: 'create',
    component: CrearEditFinancialProductComponent
  },
  {
    path: 'edit/:productId',
    component: CrearEditFinancialProductComponent
  }

]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FinancialProductsRoutingModule {
}
