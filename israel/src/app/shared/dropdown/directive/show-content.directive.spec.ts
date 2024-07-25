import { ShowContentDirective } from './show-content.directive';
import { ElementRef, Renderer2 } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DropdownComponent } from "../dropdown.component";




describe('ShowContentDirective', () => {
  let fixture: ComponentFixture<DropdownComponent>;
  let el: ElementRef<any>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShowContentDirective, DropdownComponent],
      providers: []
    });

    fixture = TestBed.createComponent(DropdownComponent);

    fixture.detectChanges();
  })
  it('should create an instance', () => {
    const directive = new ShowContentDirective(el);
    expect(directive).toBeTruthy();
  });
});
