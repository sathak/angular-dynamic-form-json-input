import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
     MatFormFieldModule,
     MatAutocompleteModule,
     MatSelectModule,
     MatCardModule
    
    } from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicFormComponent } from './dynamicform/dynamic-form-component';
import { DynamicFieldComponent } from './dynamicform/components/dynamic-field-component';

@NgModule({
  imports:      [ 
        BrowserModule, 
        BrowserAnimationsModule,
        CommonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule
         ],
  declarations: [ AppComponent, HelloComponent,DynamicFormComponent,
        DynamicFieldComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
