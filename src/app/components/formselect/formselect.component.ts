import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectField } from 'src/app/models';

@Component({
  selector: 'app-formselect',
  templateUrl: './formselect.component.html',
  styleUrls: ['./formselect.component.scss'],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormselectComponent),
    multi: true
  }]
})
export class FormselectComponent implements ControlValueAccessor {

  @Input() data: SelectField;

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

  get options() {
    if (!this.data) return [];
    return this.data.options;
  }

}
