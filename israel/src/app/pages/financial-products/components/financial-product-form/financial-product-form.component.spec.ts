import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FinancialProductFormComponent } from './financial-product-form.component';
import { HttpClientTestingModule, provideHttpClientTesting } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";
import { AbstractControl } from "@angular/forms";
import spyOn = jest.spyOn;

describe('FinancialProductFormComponent', () => {
  let component: FinancialProductFormComponent;
  let fixture: ComponentFixture<FinancialProductFormComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialProductFormComponent, HttpClientTestingModule],
      providers: [
        provideHttpClientTesting(),
      ]
    })
      .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    fixture = TestBed.createComponent(FinancialProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should validate name field ', () => {
    const name = component.createEditForm.controls['name'];

    name.setValue('');
    expect(name.errors?.['required']).toBeTruthy();

    name.setValue('abcd');
    expect(name.errors?.['minlength']).toBeTruthy();

    name.setValue('a'.repeat(101));
    expect(name.errors?.['maxlength']).toBeTruthy();

    name.setValue('Valid Name');
    expect(name.valid).toBeTruthy();
  });

  it('should validate description field', () => {
    const description = component.createEditForm.controls['description'];

    description.setValue('');
    expect(description.errors?.['required']).toBeTruthy();

    description.setValue('short');
    expect(description.errors?.['minlength']).toBeTruthy();

    description.setValue('a'.repeat(201));
    expect(description.errors?.['maxlength']).toBeTruthy();

    description.setValue('This is a valid description.');
    expect(description.valid).toBeTruthy();
  });

  it('should validate logo field ', () => {
    const logo = component.createEditForm.controls['logo'];

    logo.setValue('');
    expect(logo.errors?.['required']).toBeTruthy();

    logo.setValue('valid_logo.png');
    expect(logo.valid).toBeTruthy();
  });

  it('should validate date_release field', () => {
    const dateRelease = component.createEditForm.controls['date_release'];

    dateRelease.setValue('');
    expect(dateRelease.errors?.['required']).toBeTruthy();

    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 10);
    dateRelease.setValue(pastDate.toISOString().split('T')[0]);
    expect(dateRelease.errors?.['invalidDate']).toBeTruthy();

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    dateRelease.setValue(futureDate.toISOString().split('T')[0]);
    expect(dateRelease.valid).toBeTruthy();
  });

  it('should return correct messages depend type Error', () => {
    expect(component.errorMessages['required']()).toEqual('Este campo es requerido');
    const testnumber = 4;
    expect(component.errorMessages['maxlength'](testnumber)).toEqual(`Este campo debe tener máximo ${testnumber} caracteres`);
    expect(component.errorMessages['minlength'](testnumber)).toEqual(`Este campo debe tener al menos ${testnumber} caracteres`);
    expect(component.errorMessages['invalidId']()).toEqual('Este id ya existe');
    expect(component.errorMessages['invalidDate']()).toEqual('La fecha tiene que ser mayor o igual a la actual');
  });

  it('getMessageErrorControl should return an empty array', () => {

    const nameControl: AbstractControl = component.createEditForm.controls['name'];
    const responseMesages = component.getMessageErrorControl(nameControl);
    expect(responseMesages.length).toEqual(0);
  });

  it('getMessageErrorControl should return an array with 2 items', () => {

    const nameControl: any = component.createEditForm.controls['name'];
    nameControl.errors = {required: true, maxlength: true};
    nameControl.touched = true;
    const responseMesages = component.getMessageErrorControl(nameControl);
    expect(responseMesages.length).toBe(2);
  });

});
