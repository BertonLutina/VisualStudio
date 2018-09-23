import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'switchcase-component',
  templateUrl: './ng-switch-case-component.component.html',
  styleUrls: ['./ng-switch-case-component.component.css']
})
export class NgSwitchCaseComponentComponent implements OnInit {
  viewMode = 'somethingElse';
  constructor() { }

  ngOnInit() {
  }

}
