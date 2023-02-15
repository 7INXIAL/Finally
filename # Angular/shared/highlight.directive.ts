import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input() highlight = '';
  @Input() defaultColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.setHighlight(this.defaultColor || this.highlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHighlight('');
  }

  private setHighlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
