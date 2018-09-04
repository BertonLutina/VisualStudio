import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent  {
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  number = 0;
  names = ['Peter', 'Jan', 'Andries', 'Nils', 'Miguel' ];
  constructor() { }


  onClick() {
    this.isFavorite = !this.isFavorite;
    this.number = (this.isFavorite) ? +1 : 0;
    this.change.emit({newValue: this.isFavorite});
  }



}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}


