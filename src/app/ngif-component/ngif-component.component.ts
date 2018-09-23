import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngif-component',
  templateUrl: './ngif-component.component.html',
  styleUrls: ['./ngif-component.component.css']
})
export class NgifComponentComponent implements OnInit {
  courses = [];
  constructor() { }

  ngOnInit() {
  }

}
