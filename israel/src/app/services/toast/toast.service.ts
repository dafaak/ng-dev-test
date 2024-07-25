import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Toast } from "./models/toast";


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  readonly showToastSubject: Subject<Toast> = new Subject<Toast>();

  showToast(toast: Toast) {
    this.showToastSubject.next(toast);
  }

}
