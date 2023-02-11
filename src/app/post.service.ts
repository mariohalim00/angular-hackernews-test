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


// This is a service to manage the data received from the firebase backend

export class PostService {
 
  storiesListIds: number[] = [];

  constructor(private http: HttpClient) { }


  getStoriesByTypesInURL(url: string){
    // example: frontend url is www.aaa.com/worst
    // this function will receive the '/post' as parameter from the caller and choose the appropriate URL to run
    
    let api_url: string = "";
    if(url === '/' || url === '/ask') api_url = LATEST_ASK_HN_URL;
    if(url === '/top') api_url = LATEST_TOP_HN_URL;

    let res = this.http.get(api_url);
    return res
  }
  

  getStoryById(id: number){
    let url: string = STORY_URL + id.toString() + ".json?print=pretty"
    
    let res = this.http.get(url);
    return res;
  }
}
