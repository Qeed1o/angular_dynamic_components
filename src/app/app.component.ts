import { AfterViewInit, Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FIELDS_INJECTION_TOKEN } from './constants';
import { BasicField, FieldTypes } from './models';
import { DynamicComponentsService } from './services/DynamicFieldsService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;

  form: FormGroup;
  private _fields: BasicField[] = [];

  set fields(fields: BasicField[]) {
    this._fields = fields;
    this.buildFormGroup();
    this.rebuildComponents();
  }
  get fields(): BasicField[] {
    return this._fields;
  }

  constructor(
    private formBuilder: FormBuilder,
    private dynamicComponentsService: DynamicComponentsService,
    @Inject(FIELDS_INJECTION_TOKEN) fields: BasicField[]
  ) {
    this._fields = fields;
    this.buildFormGroup();
  }

  ngAfterViewInit(): void {
    this.rebuildComponents();      
  }

  buildFormGroup() {
    const { controls = {}} = this.form || {};
    const group = this.fields
      .filter(f => f.type !== FieldTypes.Button)
      .reduce( (acc, f) => {
        const control = controls[f.name]
          || new FormControl(f.value, f.validatorOrOpts, f.asyncValidator)
        return {
          ...acc,
          [f.name]: control
        }
      }, {})
    this.form = this.formBuilder.group(group);
  }

  rebuildComponents(): void {
    this.dynamicComponentsService
      .setFields(this.fields)
      .setViewRef(this.viewRef)
      .addComponents()
      .bindFormControls(this.form.controls);
  }

  addComponent() {
    this.fields = [
      ...this.fields,
      {
        name: Math.random().toString(27),
        type: FieldTypes.Input,
      }
    ]
  }

  removeComponentByIndex(index: number) {
    this.fields = this.fields.filter((_, idx) => index !== idx)
  }

  get jsonForm() {
    const controls = Object.entries(this.form.controls)
      .reduce( (all, [key, control]) => ({
        ...all,
        [key]: {
          value: control.value,
          valid: control.valid,
          errors: control.errors
        }
      }), {} )
    return controls;
  }
}
