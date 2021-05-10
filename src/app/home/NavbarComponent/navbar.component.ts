import { Component, Input } from '@angular/core';
@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input()
  //title: string;
  items = ["Navbar1", "Navbar2", "Navbar3", "Navbar5", "Navbar6"];
  constructor() {}
}
