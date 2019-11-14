import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input("appHighlight") highLightColor: string = 'red';

  constructor(private el: ElementRef) { 
    console.log('directive run!', el.nativeElement);
    this.highlight('');
  }
  //podemos modificar propiedad con la directiva
  private highlight(color: string ): void{
    this.el.nativeElement.style.backgroundColor = color;
  }
  //escuchando los eventos podemos modificarlo
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highLightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }
}
