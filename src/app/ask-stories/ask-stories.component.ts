import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-ask-stories',
  templateUrl: './ask-stories.component.html',
  styleUrls: ['./ask-stories.component.scss']
})
export class AskStoriesComponent {
  latestHNStoriesIds: any;
  constructor(private postService: PostService) {
  }


  ngOnInit() :void{
    this.latestHNStoriesIds = this.postService.getLatestAskHNStories();
  }

}
