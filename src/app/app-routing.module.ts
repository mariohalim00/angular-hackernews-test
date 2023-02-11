import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskStoriesComponent } from './ask-stories/ask-stories.component';
import { PostListComponent } from './post-list/post-list.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'ask', component: PostListComponent},
  {path: 'top', component: PostListComponent},
  {path: 'item/:id', component: StoryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
