import { Component, OnInit } from '@angular/core';
import type { SwitchChangeEvent } from '@porsche-design-system/components-angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  clicked:boolean = false;
  checked: boolean = true;
  registerType: string = 'Fornecedor';
  name: string = 'Nome Completo:';
  cnpjOrCpf: string = 'CPF:';

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar() {
    this.clicked = !this.clicked;
  }

  onSwitchChange(e: CustomEvent<SwitchChangeEvent>) {
    this.checked = e.detail.checked;
    if(this.checked) {
      this.registerType = 'Fornecedor';
      this.name = 'Nome Completo:';
      this.cnpjOrCpf = 'CPF:';
    } else {
      this.registerType = 'Empresa';
      this.name = 'Nome Fantasia:';
      this.cnpjOrCpf = 'CNPJ:';
    }
  }
}
