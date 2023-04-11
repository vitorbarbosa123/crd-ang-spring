import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { ListComponent } from './list/list/list.component';
import { RegisterComponent } from './register/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    PorscheDesignSystemModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RegisterComponent
  ]

})
export class PagesModule { }
