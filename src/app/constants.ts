import { Validators } from "@angular/forms";
import { BasicField, ButtonField, FieldTypes, SelectField } from "./models";

export const FIELDS_INJECTION_TOKEN = 'Fields';
export const COMPONENTS_MAP_INJECTION_TOKEN = 'ComponentMap';

export const InitialFields: BasicField[] = [
    {
      name: 'age-input',
      type: FieldTypes.Input,
      value: 'test',
      validatorOrOpts: [Validators.required, Validators.minLength(5)]
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
      value: 'Понедельник',
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
    {
        label: 'Submit',
        name: 'submit-button',
        onClick: () => console.log('submit'),
        type: FieldTypes.Button,
    } as ButtonField
  ]