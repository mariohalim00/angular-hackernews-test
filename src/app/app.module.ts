import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { PostListComponent } from './post-list/post-list.component';
import { NgxsModule } from '@ngxs/store';
import { PostListState } from './state/postList.state';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    StoryDetailComponent,
    CommentsComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    NgxPaginationModule,
    NgxsModule.forRoot([
      PostListState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
