import { Component, OnInit } from '@angular/core';
import type { SwitchChangeEvent } from '@porsche-design-system/components-angular';
import type { AccordionChangeEvent } from '@porsche-design-system/components-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  clicked:boolean = false;
  checked: boolean = true;
  personalData = true;
  location = true;
  work = true;
  registerType: string = 'Fornecedor';
  name: string = 'Nome Completo:';
  cnpjOrCpf: string = 'CPF:';

  constructor() { }

  ngOnInit(): void {
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
