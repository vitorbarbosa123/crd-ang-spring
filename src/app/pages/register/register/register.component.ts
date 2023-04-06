import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  clicked:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar() {
    this.clicked = !this.clicked;
  }
}
