import { Component, inject, output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { combineLatest, debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { FinancialProductHttpService } from "../../../../services";
import { NgClass } from "@angular/common";
import { UniqueValidatorService } from "./validators/unique-validator.service";
import { FinancialProductInterface } from "../../../../models";


type fieldFormErrorMessages = {
  id: string[]
  name: string[]
  description: string[]
  logo: string[]
  date_release: string[],
  [other: string]: string[],
}


@Component({
  selector: 'app-financial-product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './financial-product-form.component.html',
  styleUrl: './financial-product-form.component.scss'
})
export class FinancialProductFormComponent {
  formSubmit = output<FinancialProductInterface>();
  createEditForm: FormGroup;
  errorMessages: { [typeError: string]: (length?: number) => string } = {
    required: () => 'Este campo es requerido',
    minlength: (minlength?: number) => `Este campo debe tener al menos ${minlength} caracteres`,
    maxlength: (maxLength?: number) => `Este campo debe tener máximo ${maxLength} caracteres`,
    invalidId: () => 'Este id ya existe',
    dateNotPass: () => 'La fecha tiene que ser mayor o igual a la actual',
  };

  errorMessagesByField: fieldFormErrorMessages = {id: [], name: [], description: [], logo: [], date_release: []}

  formSubscription!: Subscription;

  private financialProductsService = inject(FinancialProductHttpService);
  private uniqueValidatorService = inject(UniqueValidatorService);

  constructor() {
    this.createEditForm = new FormGroup(
      {
        id: new FormControl('',
          {
            asyncValidators: [this.uniqueValidatorService.validate.bind(this.uniqueValidatorService)],
            updateOn: 'blur',
            validators: [
              Validators.required,
              Validators.maxLength(10),
              Validators.minLength(3)
            ],
          }
        ),
        name: new FormControl('', [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(5)]),
        description: new FormControl('', [
          Validators.required,
          Validators.maxLength(200),
          Validators.minLength(10)]),
        logo: new FormControl('', [
          Validators.required]),
        date_release: new FormControl('', [
          Validators.required]),
        date_revision: new FormControl(''),
      }
    )

    this.createEditForm.get('date_revision')?.disable();

    this.manageErrorForm();
  }

  getMessageErrorControl(control: AbstractControl): string[] {
    let errorMessages: string[] = [];
    if ((control.dirty || control.touched) && control.errors) {
      errorMessages = Object.keys(control.errors).map(keyError => {
          if ((keyError === 'minlength' || keyError === 'maxlength') && control.errors) {
            const minMaxLength: number = control.errors[keyError].requiredLength;
            return this.errorMessages[keyError] ? this.errorMessages[keyError](minMaxLength) : 'Error desconocido'

          } else if (keyError === 'dateNotPass') {
            return this.errorMessages[keyError]();
          } else {
            return this.errorMessages[keyError] ? this.errorMessages[keyError]() : 'Error desconocido'
          }
        }
      );
    }
    return errorMessages;
  }

  handleFormChanges(values: any): void {
    this.setControlErrorMessage('id');
    this.setControlErrorMessage('name');
    this.setControlErrorMessage('description');
    this.setControlErrorMessage('logo');
    this.setControlErrorMessage('date_release');

    if (values.date_release) {
      const dateRelease = new Date(values.date_release);
      dateRelease.setDate(dateRelease.getDate() + 365);
      this.createEditForm.get('date_revision')?.patchValue(dateRelease.toISOString().slice(0, 10));
    }
  }

  manageErrorForm() {
    this.formSubscription = combineLatest([this.createEditForm.valueChanges, this.createEditForm.statusChanges])
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(
          (prev, curr) => (
            prev[0].id === curr[0].id &&
            prev[0].name === curr[0].name &&
            prev[0].description === curr[0].description &&
            prev[0].logo === curr[0].logo &&
            prev[0].date_release === curr[0].date_release
          )
        )
      ).subscribe({
          next: ([values, status]) => {
            this.handleFormChanges(values);
          }
        }
      )
  }

  onSubmit() {
    this.formSubmit.emit(this.createEditForm.getRawValue());
  }

  setControlErrorMessage(controlName: string): void {
    const control = this.createEditForm.get(controlName);
    if (control) {
      const errorMessages = this.getMessageErrorControl(control);
      this.errorMessagesByField[controlName] = errorMessages;
    }
  }


}
