import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  clicked:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar() {
    this.clicked = !this.clicked;
  }
}
