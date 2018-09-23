import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'newcourseform',
  templateUrl: './newcourseform.component.html',
  styleUrls: ['./newcourseform.component.css']
})
export class NewcourseformComponent {

  form = new FormGroup ({
    name: new FormControl(''),
    contact: new FormGroup({
      email: new FormControl(),
    }), 
    topics : new FormArray([])
  })

  addTopic(topic: HTMLInputElement){

  this.topics.push(new FormControl(topic.value));
  topic.value ='';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic.value);

    this.topics.removeAt(index);
  }

  get topics(){
    return (this.form.get('topics') as FormArray);
  }

}
