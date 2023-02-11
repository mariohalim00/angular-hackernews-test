import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  latestHNStoriesIds: any;
  postTypeURI: string = "ask";

  constructor(private postService: PostService, private router: Router) {
    this.postService.getLatestTopStories();
  }


  ngOnInit() :void{
    this.latestHNStoriesIds = this.getStoriesByPostType(this.router.url)
  }

  getStoriesByPostType (postTypeURL: string) {
    if(postTypeURL === '/' || postTypeURL === '/ask') return this.postService.getLatestAskHNStories();
    if(postTypeURL === '/top') return this.postService.getLatestTopStories();

    //if uri doesnt match any
    else return [-1];
  }

  storyTrackBy(index: number, item: any){
    return item.id
  }
}

