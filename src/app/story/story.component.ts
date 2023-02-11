import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';


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
    this.postService.getStoryById(id).subscribe(story => this.story = story);
  }
}
