import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMaxHeight]'
})
export class MaxHeightDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {    
    this.calculateMainHeight();
  }

  private calculateMainHeight() {
    const height = Number(this.el.nativeElement.clientHeight - this.el.nativeElement.children[0].children[0].clientHeight - this.el.nativeElement.children[2].children[0].clientHeight);
    this.el.nativeElement.children[1].style.height = `${height}px`;
    this.el.nativeElement.children[1].style.overflowY = "scroll";
  }

}
