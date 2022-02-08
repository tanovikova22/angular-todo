import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPriorityColor]'
})
export class PriorityColorDirective implements OnInit{

  @Input("appPriorityColor") priority: number = 0

  constructor(private el: ElementRef) {}

  ngOnInit() {
    let color:string = "";

    switch(+this.priority) {
      case 1: color = "red";
        break;
      case 2: color = "yellow";
        break;
      case 3: color = "green";
        break;
      default: color = "white";
    }

    this.el.nativeElement.style.backgroundColor = color;
  }
}
