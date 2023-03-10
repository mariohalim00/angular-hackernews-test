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
    // get data based on id passed in the url and assign them to the variables for the view to access
    this.route.paramMap.subscribe(
      params => {
  
       let id = params.get('id');
       if(id != null) this.postId = parseInt(id);
      }
    )
    
    let tempStory = this.postService.getStoryById(this.postId);
    tempStory.subscribe(obj => this.data = obj);
  }

}
