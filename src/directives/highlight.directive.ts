import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(readonly  el: ElementRef) { }
  @Input() baseColor: string;
  @Input('appHighlight') highLightColor: string;


  @HostListener('mouseenter') onMouseEnter() {
    this.highLight(this.highLightColor || this.baseColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLight(null);
  }

  private highLight(color: string): void {
    this.el.nativeElement.style.background = color;

  }
}
