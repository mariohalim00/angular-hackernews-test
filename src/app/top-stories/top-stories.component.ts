import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent {
  latestHNStoriesIds: any;
  constructor(private postService: PostService) {
    this.postService.getLatestTopStories();
  }


  ngOnInit() :void{
    this.latestHNStoriesIds = this.postService.getLatestTopStories();
  }

  storyTrackBy(index: number, item: any){
    return item.id
  }
}
