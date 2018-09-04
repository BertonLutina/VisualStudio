
import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
@Input('likesCount') likesCount:number;
@Input('isActive')  isLiked: boolean;
@Output('change')  change = new EventEmitter();


 
  constructor() { }
  ngOnInit() {
  }

  Likes(){
    this.isLiked = !this.isLiked;
    this.likesCount = this.isLiked ? 0 : 1;
    this.change.emit({likesCount:this.likesCount});
  }
}

export interface LikeChangedEventArgs{
  likesCount: number
}
