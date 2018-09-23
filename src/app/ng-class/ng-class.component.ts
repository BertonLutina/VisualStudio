import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

  ngOnInit() {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}