import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  

  constructor(private service: PostService) { 
  }

  ngOnInit() {
   this.getPosts();
  }

  getPosts(){
    this.service.getAll()
    .subscribe(post => this.posts = post);
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value}
    this.posts.splice(0,0,post);

    input.value = ''; 
    
        this.service.create(input).subscribe(postcreate => {
          post['id'] = postcreate.id;
          
          console.log(postcreate)
        },(error: AppError) => 
        {
          this.posts.splice(0,1);
          if(error instanceof BadInput)
            alert('This is a badrequest');
          else
            throw error;
        }
        );
  }

  updatePost(post){
    this.service.update(post)
      .subscribe(post => {
        console.log(post)
      })
    //this.http.put(this.url, JSON.stringify(post))
  }

  onDelete(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

      this.service.delete(post)
      .subscribe(() => {
      },
      (error: AppError) => {
        this.posts.splice(index,0,post);
        if(error instanceof NotFoundError)
          alert('This post has already been deleted.');
        else 
          throw error;
         
      });
  }

}
