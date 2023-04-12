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
export class FornecedoresService {

  token: string = '';
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) { }

  cadastraFornecedor(fornecedor: FormGroup) {
    this.token = this.tokenService.returnToken();

    const headers = new HttpHeaders({
      Authorization: this.token
    })

    return this.httpClient.post(`${API}/fornecedor`, fornecedor, { headers })
    .pipe(
      tap(async (res:any) => {
        console.log(res)
        return res;
      })
    )
  }

  getFornecedores() {
    this.token = this.tokenService.returnToken();

    const headers = new HttpHeaders({
      Authorization: this.token
    })

    return this.httpClient.get(`${API}/fornecedor`, { headers })
    .pipe(
      tap(async (res:any) => {
        console.log(res)
        return res;
      })
    )
  }

  deleteFornecedor(id: string) {
    this.token = this.tokenService.returnToken();

    const headers = new HttpHeaders({
      Authorization: this.token
    })

    return this.httpClient.delete(`${API}/fornecedor/${id}`,  { headers })
    .pipe(
      tap(async (res:any) => {
        console.log(res)
        return res;
      })
    )
  }

  updateFornecedor(fornecedor: FormGroup) {
    this.token = this.tokenService.returnToken();

    const headers = new HttpHeaders({
      Authorization: this.token,
    })

    return this.httpClient.put(`${API}/fornecedor/`,  fornecedor ,{ headers })
    .pipe(
      tap(async (res:any) => {
        console.log(res)
        return res;
      })
    )
  }
}
