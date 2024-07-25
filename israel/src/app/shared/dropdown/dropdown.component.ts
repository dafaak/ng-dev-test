import { Component, inject, input, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DropdownOptionInterface } from "./models/dropdown-option.interface";


@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  items = input<DropdownOptionInterface[]>();

  data = input<any>();

}
