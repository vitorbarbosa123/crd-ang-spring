import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticateService } from 'src/app/core/services/autenticate/autenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user=""
  password=""
  
  constructor(
    private autenticateService: AutenticateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  login() {
    this.autenticateService.autenticate(this.user, this.password).subscribe(() => {
      this.router.navigate(['home'])
    }, (error) => {
      alert("Usuário ou senha inválido")
      console.log(error)
    })
  }

}
