import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCloseTable]',
  standalone: true,
})
export class CloseTableDirective {
  public isOpen: boolean = false;
  constructor(private rendere: Renderer2, private elemRef: ElementRef) {}
  @HostListener('click') openTable() {
    this.isOpen !== this.isOpen;
    if (this.isOpen) {
      if (this.isOpen) {
        this.rendere.addClass(this.elemRef.nativeElement, 'open__table');
      } else {
        this.rendere.removeClass(this.elemRef.nativeElement, 'open__table');
      }
    }
  }
}
