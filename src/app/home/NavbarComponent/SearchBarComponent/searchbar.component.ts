import { Component, Input } from '@angular/core';
@Component({
selector: 'app-searchbar',
templateUrl: './searchbar.component.html',
styleUrls: ['./searchbar.component.css']
})
export class SearchBarComponent {
  @Input()
  search: string;
  //items = ["Navbar1", "Navbar2", "Navbar3", "Navbar5", "Navbar6"];
  constructor() {}
}
