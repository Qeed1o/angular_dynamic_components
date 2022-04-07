import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Inject, OnInit, Type, ViewChild, ViewContainerRef, ɵComponentType } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

    const group = this.fields.reduce( (acc, f) => ({
      ...acc,
      [f.name]: f.value
    }), {} )
    this.form = this.formBuilder.group(group)
  }

  ngAfterViewInit(): void {
    this.viewRef.clear();
    this.dynamicComponentsService
      .setViewRef(this.viewRef)
      .addComponents();
    this.dynamicComponentsService.bindFormControls(this.form.controls);
  }

  get jsonForm() {
    return JSON.stringify(this.form.value, null, 2)
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
