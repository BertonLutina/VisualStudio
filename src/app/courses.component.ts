import { Component } from '@angular/core';
import { CoursesService } from './courses.services';

@Component({
    selector: 'app-courses',
    template: `
    <span class="glyphicon"
    [class.glyphicon-star]="isPressed"
    [class.glyphicon-star-empty]="!isPressed"
    aria-hidden="false" (click)="onClick()" ></span>    `

})


export class CoursesComponent {

   
    isPressed: boolean;

    onClick() {
        this.isPressed = ! this.isPressed;
     }
}

