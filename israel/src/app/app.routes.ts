import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'financial-products',
    pathMatch: 'full'
  },
  {
    path: 'financial-products',
    loadChildren: () => import('./pages/financial-products/financial-products-routing.module').then(m => m.FinancialProductsRoutingModule)
  }
];
