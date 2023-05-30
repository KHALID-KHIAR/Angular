import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  host:{
    '(click)':'onClickDirective()',
  }
})

export class CustomDirectiveDirective {
@Input() number!:number ;
@Input() divededBy!:number ;
  elRef!:ElementRef  ;
  constructor(private elReff:ElementRef) {
    this.elRef= elReff ;
  }

  onClickDirective(){
      if(this.number%this.divededBy==0){
        alert(this.number+" isDiveded By :"+this.divededBy)
        if(this.elRef)
        this.elRef.nativeElement.style.color ='green' ;
      }
    else{
      this.elRef.nativeElement.style.color ='red' ;
    }
  }
}
