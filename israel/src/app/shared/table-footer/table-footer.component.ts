import { Component, input, output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-table-footer',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './table-footer.component.html',
  styleUrl: './table-footer.component.scss'
})
export class TableFooterComponent {


  amount = input(0);

  amountChange = output<number>();

  amountSelected = '5';


  emitAmount(): void {
    this.amountChange.emit(+this.amountSelected)
  }


}
