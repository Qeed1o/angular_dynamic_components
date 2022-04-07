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

  _fields: BasicField[];
  form: FormGroup;

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
    const group = this._fields
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
      .setFields(this._fields)
      .setViewRef(this.viewRef)
      .addComponents()
      .bindFormControls(this.form.controls);
  }

  addComponent() {
    this._fields = [
      ...this._fields,
      {
        name: Math.random().toString(27),
        type: FieldTypes.Input,
      }
    ]
    this.buildFormGroup();
    this.rebuildComponents();
  }

  removeComponentByIndex(index: number) {
    this._fields = this._fields.filter((_, idx) => index !== idx)
    this.buildFormGroup();
    this.rebuildComponents();
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
