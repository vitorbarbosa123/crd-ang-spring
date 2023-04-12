import { Component, OnInit } from '@angular/core';
import type { SwitchChangeEvent } from '@porsche-design-system/components-angular';
import type { AccordionChangeEvent } from '@porsche-design-system/components-angular';
import { mask, unMask } from 'remask';
import { CepService } from 'src/app/core/services/cep/cep.service';
import { IEndereco } from 'src/app/core/interfaces/IEndereco';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EmpresasService } from 'src/app/core/services/empresas/empresas.service';
import { IFornecedor } from 'src/app/core/interfaces/IFornecedor';
import { FornecedoresService } from 'src/app/core/services/fornecedores/fornecedores.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  clicked:boolean = false;
  checked: boolean = true;
  personalData: boolean = true;
  location: boolean = true;
  work: boolean = true;
  inputValue: any;
  isCpf: boolean = false;
  cep: string = '';
  cep$: any;
  birthdate: any;
  isChild: boolean = false;
  blockAge: boolean = false;
  formularioEmpresa: FormGroup;
  formularioFornecedor: FormGroup;
  fornecedores: IFornecedor[] = [];
  fornecedoresSelecionados: IFornecedor[] = [];

  endereco: IEndereco = {
    logradouro: '',
    bairro: '',
    cep: '',
    localidade: '',
    uf: ''
  }

  constructor(
    private cepService: CepService,
    private formBuilder: FormBuilder,
    private empresasService: EmpresasService,
    private fornecedorService: FornecedoresService
  ) { 
    this.formularioEmpresa = this.formBuilder.group({
      nome: new FormControl(''),
      cgc: new FormControl (''),
      endereco: this.formBuilder.group({
          logradouro: new FormControl(''),
          bairro: new FormControl(''),
          cep: new FormControl(''),
          cidade: new FormControl(''),
          uf: new FormControl(''),
          complemento: new FormControl(''),
          numero: new FormControl(''),
      })
    })

    this.formularioFornecedor = this.formBuilder.group({
      nome: new FormControl(''),
      cgc: new FormControl(''),
      email: new FormControl(''),
      rg: new FormControl(''),
      birthdate: new FormControl(''),
      endereco: this.formBuilder.group({
          logradouro: new FormControl(''),
          bairro: new FormControl(''),
          cep: new FormControl(''),
          cidade: new FormControl(''),
          uf: new FormControl(''),
          complemento: new FormControl(''),
          numero: new FormControl(''),
      })
    })
  }

  ngOnInit(): void {
    this.getFornecedores();
  }

  openSidebar() {
    this.clicked = !this.clicked;
  }

  onAccordion1Change(e: CustomEvent<AccordionChangeEvent>) {
    this.personalData = e.detail.open;
  }

  onAccordion2Change(e: CustomEvent<AccordionChangeEvent>) {
    this.location = e.detail.open;
  }
  onAccordion3Change(e: CustomEvent<AccordionChangeEvent>) {
    this.work = e.detail.open;
  }

  onSwitchChange(e: CustomEvent<SwitchChangeEvent>) {
    this.checked = e.detail.checked;
    
  }

  setMask() {
    this.inputValue = mask(unMask(this.inputValue), ['999.999.999-99', '99.999.999/9999-99'])
    if(this.inputValue.length == 14 && this.checked) {
      this.isCpf = true;
    } else {
      this.isCpf = false;
    }
  }

  async getCep() {
    if(this.cep != null && this.cep !== '') {
      this.cep$ = this.cepService.getCep(this.cep)
      await this.cep$.subscribe((value: IEndereco) => 
        this.endereco = value
    )}
  }

  calculateAge() {
    let today = new Date()
    let birthdate = new Date(this.birthdate)
    let year = today.getFullYear() - birthdate.getFullYear()
    let month = today.getMonth() - birthdate.getMonth()

    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      year--;
  }
  return year;
  }

  verifyAge() {
    if(this.calculateAge() >= 18) {
      this.isChild = false
    } else {
      this.isChild = true
    }
  }

  cadastraEmpresa() {
    this.formularioEmpresa.value.cgc = unMask(this.formularioEmpresa.value.cgc)
    this.empresasService.cadastraEmpresa(this.formularioEmpresa.value).subscribe(
      res => {
        console.log(res)
      }
      )
  }

  cadastraFornecedor() {
    this.formularioFornecedor.value.cgc = unMask(this.formularioFornecedor.value.cgc)
    this.fornecedorService.cadastraFornecedor(this.formularioFornecedor.value).subscribe(
      res => {
        console.log(res)
      }
    )
  }

  getFornecedores() {
    try {
      this.fornecedorService.getFornecedores().subscribe(
        res => {
          this.fornecedores = res.content;
        }
      )
    } catch {
      console.warn("Não existem fornecedores")
    }
  }

  fornecedorSelecionado(fornecedor: IFornecedor) {
    this.fornecedoresSelecionados.push(fornecedor)
    console.log(this.fornecedoresSelecionados.length)

  }

  deletarFornecedorSelecionado(id: string) {
    this.fornecedoresSelecionados = this.fornecedoresSelecionados.filter((fornecedor) => fornecedor.id !== id)
  }
}
