import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './header/header/header.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PorscheDesignSystemModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HeaderComponent, 
    SidebarComponent
  ]

})
export class SharedModule { }
