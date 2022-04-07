import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Inject, OnInit, Type, ViewChild, ViewContainerRef, ɵComponentType } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ForminputComponent } from './components/forminput/forminput.component';
import { FormselectComponent } from './components/formselect/formselect.component';
import { FIELDS_INJECTION_TOKEN } from './constants';
import { BasicField, FieldTypes } from './models';
import { DynamicComponentsService } from './services/DynamicFieldsService';


const ComponentsDictionary = {
  [FieldTypes.Select]: FormselectComponent,
  [FieldTypes.Input]: ForminputComponent
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('dyn', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dynamicComponentsService: DynamicComponentsService,
    @Inject(FIELDS_INJECTION_TOKEN) private fields: BasicField[]
  ) {
    this.dynamicComponentsService.setFields(this.fields);

    const group = this.fields
      .filter(f => f.type !== FieldTypes.Button)
      .reduce( (acc, f) => ({
        ...acc,
        [f.name]: new FormControl(
          f.value,
          f.validatorOrOpts,
          f.asyncValidator
        )
      }), {} )
    this.form = this.formBuilder.group(group)
  }

  ngAfterViewInit(): void {
    this.dynamicComponentsService
      .setViewRef(this.viewRef)
      .addComponents();
    this.dynamicComponentsService.bindFormControls(this.form.controls);
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
    return JSON.stringify(controls, null, 2)
  }
}
