import { Directive, ElementRef, HostListener, inject, Input, input } from '@angular/core';

@Directive({
  selector: '[appFallbackImage]',
  standalone: true
})
export class FallbackImageDirective {
  appFallbackImage = input<string>();
  private el = inject(ElementRef)

  @HostListener('error')
  loadFallbackOnError() {
    const element: HTMLImageElement = <HTMLImageElement>this.el.nativeElement;
    element.src = this.appFallbackImage() || 'https://via.placeholder.com/400';
  }
}
