import {Component, OnInit, forwardRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-mydatepicker',
  templateUrl: 'mydatepicker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MydatepickerComponent),
      multi: true
    },
  ],
})
export class MydatepickerComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder = 'date';
  model: any;
  private propagateChange = (_: any) => {
  };

  writeValue(obj: any): void {
    if (obj) {
      console.log(obj);
    }
    this.model = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
    console.log(fn);
  }

  registerOnTouched(fn: any): void {
    console.log(fn);
  }

  ngOnInit() {
    console.log('datepicker onInit');
  }


  outValue(v: string) {
    console.log(v);
    this.propagateChange(v.replace(/\//g, '-'));
  }
}
