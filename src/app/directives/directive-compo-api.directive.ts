import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiveCompoApi]'
})
export class DirectiveCompoApiDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('pink');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
