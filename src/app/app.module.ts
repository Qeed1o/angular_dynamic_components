import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForminputComponent } from './components/forminput/forminput.component';
import { FormselectComponent } from './components/formselect/formselect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentMap, FieldTypes } from './models';
import { COMPONENTS_MAP_INJECTION_TOKEN, FIELDS_INJECTION_TOKEN, InitialFields } from './constants';
import { ButtonComponent } from './components/button/button.component';

const map: ComponentMap = {
  [FieldTypes.Select]: FormselectComponent,
  [FieldTypes.Input]: ForminputComponent,
  [FieldTypes.Button]: ButtonComponent
}

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
      useValue: InitialFields
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
