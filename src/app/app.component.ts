import { FavoriteChangedEventArgs, LikeChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    likesCount: 0,
    isLiked: true
  };

 

  onchangeFavorite(eventArgs:FavoriteChangedEventArgs){
    console.log("Favorite Changed",eventArgs);
  }

  onchangeLike(eventArgs:LikeChangedEventArgs){
    console.log(this.tweet.likesCount,eventArgs);
  }
 
}
