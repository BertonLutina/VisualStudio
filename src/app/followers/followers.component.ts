import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private service: FollowersService) { }
  followers = [];

  ngOnInit() {
    this.getFollowers();
  }

  getFollowers(){
    this.service.getAll()
    .subscribe(response => this.followers = response);
  }
}
