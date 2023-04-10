import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list/list.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  
  { 
    path:'register', 
    component: RegisterComponent
  },
  { 
    path:'list', 
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
