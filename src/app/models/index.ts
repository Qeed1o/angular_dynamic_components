import { Type } from "@angular/core";
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from "@angular/forms";

export enum FieldTypes {
    Input = 'input',
    Select = 'select',
    Button = 'button'
}

export interface BasicField {
    type: FieldTypes;
    name: string;
    id?: string;
    value?: unknown;
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;
}

export interface ButtonField extends BasicField {
    label: string;
    onClick: () => void;
}

export interface SelectField<T = unknown> extends BasicField {
    options: T[];
}

export type ComponentMap = Record<FieldTypes, Type<unknown>>
