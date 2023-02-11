import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { Post } from './post'
import { Observable } from 'rxjs';

const BASE_URL_V0: string = "https://hacker-news.firebaseio.com/v0/";
const LATEST_ASK_HN_URL: string = BASE_URL_V0 + "askstories.json?print=pretty";
const LATEST_TOP_HN_URL: string = BASE_URL_V0 + "topstories.json?print=pretty";
const STORY_URL: string = BASE_URL_V0 + "item/"

@Injectable({
  providedIn: 'root'
})

export class PostService {
 
  storiesListIds: number[] = [];

  constructor(private http: HttpClient) { }


  async getLatestAskHNStories(){
    try{

      let res = await axios.get(LATEST_ASK_HN_URL);
      this.storiesListIds = res.data;
      
      return this.storiesListIds
    }
    catch(e){
      console.error(e);
      return e;
    }
  }
  

  getStoriesById(id: number){
    let url: string = STORY_URL + id.toString() + ".json?print=pretty"
    
    let res = this.http.get(url);
    return res;
  }

   async getLatestTopStories(){
    try{

      let res = await axios.get(LATEST_TOP_HN_URL);
      this.storiesListIds = res.data;
      
      return this.storiesListIds
    }
    catch(e){
      console.error(e);
      return e;
    }
  }

}
