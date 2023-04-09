import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { HomeComponent } from './home/home/home.component';
import { ListComponent } from './list/list/list.component';
import { RegisterComponent } from './register/register/register.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PorscheDesignSystemModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HomeComponent,
    ListComponent,
    RegisterComponent
  ]

})
export class PagesModule { }
