import { Component } from '@angular/core';

@Component({
  selector: 'safetraveloperator',
  templateUrl: './safe-travel-operator.component.html',
  styleUrls: ['./safe-travel-operator.component.css']
})
export class SafeTravelOperatorComponent {

task = {
  title : 'Review applications',
  assignee : {
    name: 'John Smith'
  }
}


}
