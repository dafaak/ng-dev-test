import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditFinancialProductComponent } from './crear-edit-financial-product.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { Observable, of } from "rxjs";
import { FinancialProductInterface } from "../../../../models";
import { FinancialProductHttpService } from "../../../../services";
import { ActivatedRoute, Router } from "@angular/router";

class FakeFinancialProductsService {
  getFinancialProducts(): Observable<FinancialProductInterface[]> {
    return of([])
  }
}

class FakeRouter {
  navigate(params: string[]) {
  }
}

class FakeActivatedRoute {
  snapshot: {params:{id:string}}={params:{id:'2'}};
}

describe('CrearEditFinancialProductComponent', () => {
  let component: CrearEditFinancialProductComponent;
  let fixture: ComponentFixture<CrearEditFinancialProductComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearEditFinancialProductComponent,

      ],
      providers: [
        {
          provide: FinancialProductHttpService, useClass: FakeFinancialProductsService
        },
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute},
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CrearEditFinancialProductComponent);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
