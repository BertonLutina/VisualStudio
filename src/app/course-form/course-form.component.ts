import { Component, OnInit } from '@angular/core';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'courseform',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent  {

  categories = [
    {id:'1', category:'Development'},
    {id:'2', category:'Art'},
    {id:'3', category:'Languages'}

  ]

  Log(x){
    console.log(x);
  }

  onsubmit(f){
    console.log(f);
  }

}
