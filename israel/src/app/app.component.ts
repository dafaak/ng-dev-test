import { Component, inject, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from "./shared";
import { Toast, ToastService } from "./services";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'BANCO';

  @ViewChild('toast') toast!: TemplateRef<any>;

  toastInfo!: Toast;

  private toastService = inject(ToastService);

  private container = inject(ViewContainerRef);

  ngOnInit() {
    const sub = this.toastService.showToastSubject.subscribe({
      next: (toast) => {
        this.toastInfo = toast;
        this.showToaster();
      }
    });
  }

  showToaster() {
    this.container.createEmbeddedView(this.toast, this);
    setTimeout(() => {
      this.container.clear()
    }, 2000)
  }

}
