import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { 
    // el.nativeElement.style.backgroundColor='orange';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  //  makeVisible(color: string) {
  //   this.el.nativeElement.style  = "visibility:visible";
  // }
  //   makeInvisible(color: string) {
  //   this.el.nativeElement.style  = "visibility:hidden";
  // }


  //    makeBigger(color: string) {
  //   this.el.nativeElement.style  = "font-size:2rem";
  // }
  //   makeSmaller(color: string) {
  //   this.el.nativeElement.style  = "font-size:0.8rem";
  // }

}
