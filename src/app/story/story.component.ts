import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Moment } from 'moment';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  story: any;

  constructor(private postService: PostService) {}

  @Input()
  set id(id: number){
    this.postService.getStoriesById(id).subscribe(story => this.story = story);
  }
}
