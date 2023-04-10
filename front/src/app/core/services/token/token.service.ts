import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem(KEY, token)
  }
  deleteToken() {
    localStorage.removeItem(KEY)
  }

  returnToken() {
    return localStorage.getItem(KEY) ?? ''
  }

  isToken() {
    return !!this.returnToken();
  }
}
