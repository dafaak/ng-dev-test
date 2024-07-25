import { inject, Injectable } from '@angular/core';
import { FinancialProductHttpService } from "../../../../../services";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UniqueValidatorService {
  private financialProductsService = inject(FinancialProductHttpService);

  validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.financialProductsService.validateId(control.value).pipe(
      map(isTaken => {
        return isTaken ? {invalidId: true} : null
      }),
      catchError(() => of(null))
    );
  }
}
