import { Injectable } from '@angular/core';
import { IEmpresa } from '../../interfaces/IEmpresa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../token/token.service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { FormGroup } from '@angular/forms';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  token: string = '';
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) { }

  cadastraEmpresa(empresa: FormGroup) {
    this.token = this.tokenService.returnToken();

    const headers = new HttpHeaders({
      Authorization: this.token
    })

    return this.httpClient.post(`${API}/empresa`, empresa, { headers })
    .pipe(
      tap(async (res:any) => {
        console.log(res)
        return res;
      })
    )
  }
}
