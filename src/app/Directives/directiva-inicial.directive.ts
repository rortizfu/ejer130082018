import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[appDirectivaInicial]'
})
export class DirectivaInicialDirective implements OnInit {

  @Input() color: string;
  @Input() tamano: string;

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.border = `${this.tamano}px solid ${this.color}`;
  }

  ngOnInit(){
    this.el.nativeElement.style.border = `${this.tamano}px solid ${this.color}`;
  }

  public setBorder(){
      this.el.nativeElement.style.border = `${this.tamano}px solid ${this.color}`;

  }



}
