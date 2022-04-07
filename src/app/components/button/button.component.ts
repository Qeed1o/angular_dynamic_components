import { Component, Input } from '@angular/core';
import { ButtonField } from 'src/app/models';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() data: ButtonField;
  @Input() onClick = () => {};
}
