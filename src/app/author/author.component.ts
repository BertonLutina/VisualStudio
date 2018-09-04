import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `
  <h2></h2>
  <ul>
    <li *ngFor=''></li>
  </ul>
  `,
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
