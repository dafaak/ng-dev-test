import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditFinancialProductComponent } from './crear-edit-financial-product.component';

describe('CrearEditFinancialProductComponent', () => {
  let component: CrearEditFinancialProductComponent;
  let fixture: ComponentFixture<CrearEditFinancialProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearEditFinancialProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEditFinancialProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
