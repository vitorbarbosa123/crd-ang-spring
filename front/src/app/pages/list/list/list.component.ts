import { Component, OnInit } from '@angular/core';
import { IEmpresa } from 'src/app/core/interfaces/IEmpresa';
import { IFornecedor } from 'src/app/core/interfaces/IFornecedor';
import { EmpresasService } from 'src/app/core/services/empresas/empresas.service';
import { FornecedoresService } from 'src/app/core/services/fornecedores/fornecedores.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import type { AccordionChangeEvent } from '@porsche-design-system/components-angular';
import { IFiltro } from 'src/app/core/interfaces/IFiltro';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  clicked:boolean = false;
  fornecedores: IFornecedor[] = [];
  empresas: IEmpresa[] = [];
  cadastros: IFiltro[] = []
  cadastroType: boolean = false;
  getInfos: boolean = false;
  formularioPesquisa: FormGroup;
  headTable: string[] = [];
  isAccordion1Open = false;
  isAccordion2Open = false;

  constructor( 
    private fornecedorService: FornecedoresService,
    private empresaService: EmpresasService,
    private formBuilder: FormBuilder,
    ) {
      this.formularioPesquisa = this.formBuilder.group({
        dataType: new FormControl(''),
        dataValue: new FormControl(''),
        companyType: new FormControl(''),

      })
     }

  ngOnInit(): void {
    this.headTable = [
      'Nome', 'Cgc', 'Cep', 'Ações:'
    ]
  }

  openSidebar() {
    this.clicked = !this.clicked;
  }

  getFornecedores() {
    try {
      this.fornecedorService.getFornecedores().subscribe(
        res => {
          this.cadastros = res.content;
        }
      )
    } catch {
      console.warn("Não existem fornecedores")
    }
  }

  getEmpresas() {
    try {
      this.empresaService.getEmpresas().subscribe(
        res => {
          this.cadastros = res.content;
        }
        )
    } catch {
      console.warn("Não existem Empresas")
    }
  }

  getDataSearched() {
    console.log()
    if(this.formularioPesquisa.value.companyType == 'EMPRESA') {
      try {
        this.getEmpresas()
      } catch(e) {
        console.warn(e)
      }
    } else {
      try {
        this.getFornecedores()
      } catch(e) {
        console.warn(e)
      }
    }
    this.getInfos =  true;
  }

  filtrarDados() {
    let value = this.formularioPesquisa.value.dataValue
    this.cadastros = this.cadastros.filter((cadastro) => cadastro.cgc === value)
  }

  deletarCadastro(id: string) {
    this.cadastros = this.cadastros.filter((cadastro) => cadastro.id !== id)
    if(this.formularioPesquisa.value.companyType == 'EMPRESA') {
      try {
        this.empresaService.deleteEmpresa(id).subscribe(
          res => {
            this.cadastros = res.content;
          }
        )
      } catch(e) {
        console.warn(e)
      }
    } else {
      try {
        this.fornecedorService.deleteFornecedor(id).subscribe(
          res => {
            this.cadastros = res.content;
          }
        )
      } catch(e) {
        console.warn(e)
      }
    }
  }

  onAccordion1Change(e: CustomEvent<AccordionChangeEvent>) {
    this.isAccordion1Open = e.detail.open;
  }

  onAccordion2Change(e: CustomEvent<AccordionChangeEvent>) {
    this.isAccordion2Open = e.detail.open;
  }
}
