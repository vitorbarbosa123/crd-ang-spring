import { Component, OnInit } from '@angular/core';
import type { SwitchChangeEvent } from '@porsche-design-system/components-angular';
import type { AccordionChangeEvent } from '@porsche-design-system/components-angular';
import { mask, unMask } from 'remask';

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
    
  }

  setMask() {
    this.inputValue = mask(unMask(this.inputValue), ['999.999.999-99', '99.999.999/9999-99'])
    if(this.inputValue.length == 14 && this.checked) {
      this.isCpf = true;
    } else {
      this.isCpf = false;
    }
  }
}
