import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BasicField } from 'src/app/models';

@Component({
  selector: 'app-forminput',
  templateUrl: './forminput.component.html',
  styleUrls: ['./forminput.component.scss'],
})
export class ForminputComponent {
  @Input() control: AbstractControl;
  @Input() data: BasicField;
}
