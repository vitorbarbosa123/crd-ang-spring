import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { IUser } from '../../interfaces/iuser'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<IUser>({});

  constructor( private tokenService: TokenService) {
    if(this.tokenService.isToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT() {
    const token = this.tokenService.returnToken();
    const user = jwtDecode(token) as IUser;
    this.userSubject.next(user);
  }

  returnUser(): Observable<IUser> {
    return this.userSubject.asObservable();
  }

  saveToken(token:string) {
    this.tokenService.saveToken(token)
    this.decodeJWT();
  }

  isLogin() {
    return this.tokenService.isToken();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

}
