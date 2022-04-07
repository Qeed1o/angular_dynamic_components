import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForminputComponent } from './components/forminput/forminput.component';
import { FormselectComponent } from './components/formselect/formselect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicField, ComponentMap, FieldTypes, SelectField } from './models';
import { COMPONENTS_MAP_INJECTION_TOKEN, FIELDS_INJECTION_TOKEN } from './constants';

const map: ComponentMap = {
  [FieldTypes.Select]: FormselectComponent,
  [FieldTypes.Input]: ForminputComponent
}

const fields: BasicField[] = [
  {
    name: 'age-input',
    type: FieldTypes.Input,
    value: 'test'
  },
  {
    name: 'day-select',
    type: FieldTypes.Select,
    options: [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ],
    value: 'Понедельник'
  } as SelectField<string>,
  {
    name: 'number-select',
    type: FieldTypes.Select,
    options: [
      1,
      2,
      3,
      4,
      5
    ]
  } as SelectField<number>,
]

@NgModule({
  declarations: [
    AppComponent,
    ForminputComponent,
    FormselectComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: COMPONENTS_MAP_INJECTION_TOKEN,
      useValue: map
    },
    {
      provide: FIELDS_INJECTION_TOKEN,
      useValue: fields 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
