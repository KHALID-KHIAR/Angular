import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})    // i just started it not finishing 
export class InputComponent implements ControlValueAccessor {
  value!:any ;
  @Input() formName!:any ;
  onChange = ()=>{}
  onTouched = ()=>{}
  writeValue(value: any): void {
    this.value = value ;
  }
  registerOnChange(change:any){
    this.onChange = change ;
  }
  registerOnTouched(){

  }


}
