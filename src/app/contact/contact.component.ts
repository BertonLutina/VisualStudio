import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  contactMethods = [
    {id:'1',
    name : 'Email'},
    {id:'2',
    name : 'Phone'},
  ]
  Log(x){
    console.log(x);
  }

  onSubmit(f){
    console.log(f);
  }
}
