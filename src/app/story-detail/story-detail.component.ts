import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent {
  
  postId :number = -1;
  data :any;

  constructor(private route: ActivatedRoute, private postService: PostService){}

  ngOnInit (): void{
    this.route.paramMap.subscribe(
      params => {
  
       let id = params.get('id');
       if(id != null) this.postId = parseInt(id);
      }
    )
    
    let tempStory = this.postService.getStoriesById(this.postId);
    tempStory.subscribe(obj => this.data = obj);
  }

}
