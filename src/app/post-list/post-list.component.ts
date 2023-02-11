import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  // constants
  PAGE_SIZE: number = 20;

  // variables
  latestHNStoriesIds: any;
  postTypeURI: string = "ask";
  currentPage: number = 1;
  storiesIdsList: number[] = [];

  constructor(private postService: PostService, private router: Router) {
  }


  ngOnInit() :void{
    this.getStoriesByPostType(this.router.url);
    
  }

  getStoriesByPostType (postTypeURL: string) {
    // example: frontend url is www.aaa.com/worst
    // this function will send the '/post' as parameter to the service function to get the list of stories by that type of post (e.g. top, ask, new, etc.)

   return this.postService.getStoriesByTypesInURL(postTypeURL).subscribe(obj => this.latestHNStoriesIds = obj);

  }

  storyTrackBy(index: number, item: any){
    return item.id
  }
}

