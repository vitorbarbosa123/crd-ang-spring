import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';

const API = environment.cepAPI;

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCep(cep: string) {
    return this.httpClient.get(`${API}${cep}/json`).pipe(
      tap(async (res:any) => {
        return res;
      })
    )
  }

  
}
