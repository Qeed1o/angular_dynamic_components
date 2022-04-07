import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor } from '@angular/forms';
import { SelectField } from 'src/app/models';

@Component({
  selector: 'app-formselect',
  templateUrl: './formselect.component.html',
  styleUrls: ['./formselect.component.scss']
})
export class FormselectComponent {

  @Input() control: AbstractControl;
  @Input() data: SelectField;

  get options() {
    if (!this.data) return [];
    return this.data.options;
  }

}
