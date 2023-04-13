import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login/login.guard';
import { AutenticateGuard } from './core/guards/autenticate/autenticate.guard';
import { ListComponent } from './pages/list/list/list.component';
import { RegisterComponent } from './pages/register/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: '',
    pathMatch: "full",
    redirectTo: "/home",
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    canLoad: [AutenticateGuard]
  },
  {
    path: 'list',
    component: ListComponent,
    canLoad: [AutenticateGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canLoad: [AutenticateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
