import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskStoriesComponent } from './ask-stories/ask-stories.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';

const routes: Routes = [
  {path: '', component: AskStoriesComponent},
  {path: 'ask', component: AskStoriesComponent},
  {path: 'top', component: TopStoriesComponent},
  {path: 'item/:id', component: StoryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
