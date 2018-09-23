import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-dection-component',
  templateUrl: './ng-for-dection-component.component.html',
  styleUrls: ['./ng-for-dection-component.component.css']
})
export class NgForDectionComponentComponent implements OnInit {

  courses = [
    {id : 1 , name: 'AD'},
    {id : 2 , name: 'MB'},
    {id : 3 , name: 'SE'},
    {id : 4 , name: 'IN'}
  ]  

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.courses.push({id: 5, name: 'FR'})
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1) // to Remove item
  }
  onChange(course){
    course.name = 'Updated'
  }
}
