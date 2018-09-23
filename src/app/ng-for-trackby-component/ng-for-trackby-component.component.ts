import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-trackby-component',
  templateUrl: './ng-for-trackby-component.component.html',
  styleUrls: ['./ng-for-trackby-component.component.css']
})
export class NgForTrackbyComponentComponent implements OnInit {
  courses;
  constructor() { }

  ngOnInit() {
  }

  LoadCourses(){
    this.courses = [
      {id : 1 , name: 'AD'},
      {id : 2 , name: 'MB'},
      {id : 3 , name: 'SE'},
      {id : 4 , name: 'IN'}
    ]  
  }

  trackCourse(index, course){
      return course ? course.id : undefined;
  }
}
