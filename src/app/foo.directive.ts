import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFoo]'
})
export class FooDirective {
  constructor(e: ElementRef, render: Renderer2) {
    console.log(e);
    // render.setStyle(e,'color','red',null);
  }
}
