import { ComponentFactoryResolver, ComponentRef, Inject, Injectable, Type, ViewContainerRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { COMPONENTS_MAP_INJECTION_TOKEN } from '../constants';
import { BasicField, ComponentMap } from '../models';

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
    addComponents() {
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
    }
    bindFormControls(controls: { [key: string]: AbstractControl }) {
        for (const field of this.fields) {
            const component = this.components[field.name];
            
            const instance = component.instance as { [key: string]: any }
            instance.control = controls[field.name]
            instance.data = field;
        }
    }
}
