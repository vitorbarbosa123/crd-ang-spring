import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { UserService } from '../user/user.service';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class AutenticateService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  autenticate(login: string, password: string) {
    return this.httpClient.post(`${API}/login`, {
      login: login,
      password: password
    }, 
      { observe: 'response'}
    ).pipe(
      tap(async (res:any) => {
        const authToken = `Bearer ${res.body.token}`;
        this.userService.saveToken(authToken);
      })
    )
  }
}
