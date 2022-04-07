import { ComponentFactoryResolver, ComponentRef, Inject, Injectable, ViewContainerRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { COMPONENTS_MAP_INJECTION_TOKEN } from '../constants';
import { BasicField, ButtonField, ComponentMap, FieldTypes } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentsService {
    private viewRef: ViewContainerRef;
    fields: BasicField[];
    components: { [key: string]: ComponentRef<unknown> };

    constructor(
        @Inject(COMPONENTS_MAP_INJECTION_TOKEN) private componentMap: ComponentMap,
        private readonly componentFactoryResolver: ComponentFactoryResolver
    ) { }

    setFields(fields: BasicField[]): this { 
        this.fields = fields;
        return this;
    }
    setViewRef(viewRef: ViewContainerRef): this { 
        this.viewRef = viewRef;
        return this;
    }
    addComponents(): this {
        this.viewRef.clear();
        this.components = this.fields.reduce( (all, field) => {
            const component = this.componentMap[field.type]
            const componentFactory =
                this.componentFactoryResolver.resolveComponentFactory(component);
            const createdComponent = this.viewRef.createComponent(componentFactory);
            return {
                ...all,
                [field.name]: createdComponent
            }
        }, {});
        return this;
    }
    bindFormControls(controls: { [key: string]: AbstractControl }): this {
        for (const field of this.fields) {
            const component = this.components[field.name];

            const instance = component.instance as { [key: string]: any }
            if (field.type !== FieldTypes.Button) {
                instance.registerOnChange(val => controls[field.name].setValue(val));
                instance.registerOnTouched(controls[field.name].markAsUntouched)
                instance.value = controls[field.name].value;
            } else {
                instance.onClick = (field as ButtonField).onClick;
            }
            instance.data = field;
        }
        return this;
    }
}
