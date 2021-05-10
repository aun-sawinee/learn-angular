import { Component, Input } from '@angular/core';
@Component({
selector: 'app-cat',
templateUrl: './cat.component.html',
styleUrls: ['./cat.component.css']
})
export class CatComponent {
  @Input()
  //title: string;
  items = ["CatMenu1", "CatMenu2", "CatMenu3", "CatMenu5", "CatMenu6"];
  constructor() {}
}
