import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  comment: any;

  constructor(private postService: PostService){};

  @Input()
  set id(id: number){
    this.postService.getStoriesById(id).subscribe(comment => this.comment = comment)
  }
}
