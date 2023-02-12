import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Store, Select } from '@ngxs/store';
import { UpdatePostList } from '../actions/postList.actions';
import { Observable } from 'rxjs';

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
  


  constructor(private postService: PostService, private router: Router, private store: Store) {

  }
  
  
  ngOnInit() :void {
    //tried using state management like redux to store the id, data still loads when user navigate back.

    // this.store.select(state => state.postListId.postListId).subscribe(obj => {
    //   if(obj.length === 0 ){
    //     let storiesListObservable = this.getStoriesByPostType(this.router.url);
    //     storiesListObservable.subscribe(data => {
    //       this.latestHNStoriesIds = data;
    //       this.store.dispatch(new UpdatePostList(data as number[]));
    //     })
    //   }else{
    //     return
    //   }
    // });

    // used sessionStorage to store data
    // this will additionally check if there are any updates/differences in the data stored and data received and will update the session storage accordingly
    if(!sessionStorage.getItem('sessionPostIdList')){
      let storiesListObservable = this.getStoriesByPostType(this.router.url);
      storiesListObservable.subscribe(data => {
        sessionStorage.setItem('sessionPostIdList', JSON.stringify(data));
        this.latestHNStoriesIds = data;
      })
    }
    else{
      let storiesListObservable = this.getStoriesByPostType(this.router.url);
      storiesListObservable.subscribe(data => {
        if(JSON.stringify(data) !== sessionStorage.getItem('sessionPostIdList')){
          sessionStorage.setItem('sessionPostIdList', JSON.stringify(data));
          this.latestHNStoriesIds = data;
        }
        else{
          this.latestHNStoriesIds = JSON.parse(sessionStorage.getItem('sessionPostIdList')??"[]")
        }
      })
    }


  }

  getStoriesByPostType (postTypeURL: string) {
    // example: frontend url is www.aaa.com/worst
    // this function will send the '/post' as parameter to the service function to get the list of stories by that type of post (e.g. top, ask, new, etc.)
    
    return this.postService.getStoriesByTypesInURL(postTypeURL);
  }

  storyTrackBy(index: number, item: any){
    return item.id
  }
}

