import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-component',
  templateUrl: './ng-for-component.component.html',
  styleUrls: ['./ng-for-component.component.css']
})
export class NgForComponentComponent implements OnInit {

  courses = [
    {id : 1 , name: 'AD'},
    {id : 2 , name: 'MBI'},
    {id : 3 , name: 'SE'},
    {id : 4 , name: 'INF'}
  ]  
  constructor() { }

  ngOnInit() {
  }

}
