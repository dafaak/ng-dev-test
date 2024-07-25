import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appShowDropdownContent]',
  standalone: true
})
export class ShowContentDirective {
  private el = inject(ElementRef);

  @HostListener('click') onClick() {
    this.el.nativeElement.children[0].children[1].style.display = 'block';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.children[0].children[1].style.display = 'none';
  }

}
