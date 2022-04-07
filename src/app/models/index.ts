import { Type } from "@angular/core";

export enum FieldTypes {
    Input = 'input',
    Select = 'select',
    // Button = 'button'
}

export interface BasicField {
    type: FieldTypes;
    name: string;
    id?: string;
    value?: unknown;
}

export interface SelectField<T = unknown> extends BasicField {
    options: T[];
}

export type ComponentMap = Record<FieldTypes, Type<unknown>>
