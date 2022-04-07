import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BasicField } from 'src/app/models';

@Component({
  selector: 'app-forminput',
  templateUrl: './forminput.component.html',
  styleUrls: ['./forminput.component.scss'],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ForminputComponent),
    multi: true
  }]
})
export class ForminputComponent implements ControlValueAccessor {
  @Input() data: BasicField;

  private _value;
  private onChange = (_: any) => { };

  @Input()
  set value(val: any) {
    this._value = val;
    this.onChange(this._value);
  }
  get value() {
    return this._value;
  }

  writeValue(val: any): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { }
}
