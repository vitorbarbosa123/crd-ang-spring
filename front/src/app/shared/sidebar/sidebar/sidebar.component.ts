import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() clicked:boolean = false;
  
  constructor(private router: Router) { 

  }

  ngOnInit(): void {
   
  }

  goToHome() {
    this.router.navigate([''])
  }

  goToRegister() {
    this.router.navigate(['register'])
  }

  goToList() {
    this.router.navigate(['list'])
  }
}
