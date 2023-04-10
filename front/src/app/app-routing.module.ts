import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './core/guards/login/login.guard';
import { AutenticateGuard } from './core/guards/autenticate/autenticate.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "login"
  },
  { 
    path: '', 
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    canLoad: [LoginGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canLoad: [AutenticateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
