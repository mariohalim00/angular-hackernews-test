import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  PAGE_SIZE: number = 20;

  latestHNStoriesIds: any;
  postTypeURI: string = "ask";
  currentPage: number = 1;
  storiesIdsList: number[] = [];

  constructor(private postService: PostService, private router: Router) {
    this.postService.getLatestTopStories();
  }


  ngOnInit() :void{
    this.getStoriesByPostType(this.router.url);
    
  }

  getStoriesByPostType (postTypeURL: string) {
    let result: any;
    if(postTypeURL === '/' || postTypeURL === '/ask') return this.postService.getLatestAskHNStories().subscribe(obj => this.latestHNStoriesIds = obj);
    if(postTypeURL === '/top') return this.postService.getLatestTopStories().subscribe(obj => this.latestHNStoriesIds = obj);

    

    //if url doesnt match anything
    else return [-1];
  }

  storyTrackBy(index: number, item: any){
    return item.id
  }
}

