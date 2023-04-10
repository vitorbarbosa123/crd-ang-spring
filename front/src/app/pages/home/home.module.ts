import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PorscheDesignSystemModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
