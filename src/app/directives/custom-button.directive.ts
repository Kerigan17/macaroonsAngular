import {Directive, ElementRef, Input, OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[customButton]'
})
export class CustomButtonDirective implements OnInit{
  @Input() customButtonDefaultBgColor: string = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92)';
  @Input() customButtonHoverBgColor: string = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 172, 92)';

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter')
  mouseEnter () {
    this.setBgColor(this.customButtonHoverBgColor);
  }
  @HostListener('mouseleave')
  mouseLeave() {
    this.setBgColor(this.customButtonDefaultBgColor);
  }

  ngOnInit() {
    this.setBgColor(this.customButtonDefaultBgColor);
  }

  setBgColor(color: string) {
    this.el.nativeElement.style.backgroundImage = color;
  }

}
