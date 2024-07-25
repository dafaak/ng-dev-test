import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialProductsComponent } from './financial-products.component';
import { FinancialProductHttpService } from "../../services";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { Observable, of } from "rxjs";
import { FinancialProductInterface } from "../../models";

class FakeFinancialProductsService {
  getFinancialProducts(): Observable<FinancialProductInterface[]> {
    return of([])
  }
}

describe('FinancialProductsComponent', () => {
  let component: FinancialProductsComponent;
  let fixture: ComponentFixture<FinancialProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [FinancialProductsComponent],
        providers: [
          {
            provide: FinancialProductHttpService, useClass: FakeFinancialProductsService
          },
          provideHttpClientTesting
        ],

      },
    )
      .compileComponents();

    fixture = TestBed.createComponent(FinancialProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set amount of records to show when call handleAmountChange', () => {
    fixture.componentInstance.handleAmountChange(6);
    expect(fixture.componentInstance.amountOfRecordsToShow).toBe(6);
  })
});
