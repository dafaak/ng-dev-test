import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFooterComponent } from './table-footer.component';
import spyOn = jest.spyOn;

describe('TableFooterComponent', () => {
  let component: TableFooterComponent;
  let fixture: ComponentFixture<TableFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFooterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit amount selected when call emitAmount', () => {
    const spy = spyOn(fixture.componentInstance.amountChange, 'emit');
    fixture.componentInstance.emitAmount();
    expect(spy).toHaveBeenCalled();
  })

});
