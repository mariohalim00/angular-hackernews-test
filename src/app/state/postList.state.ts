import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { UpdatePostList } from "../actions/postList.actions";

export class PostListStateModel {
  postListId: number[] = []
}

@State<PostListStateModel>({
  name: 'postListId',
  defaults: {
    postListId: []
  }
})
@Injectable()
export class PostListState {
  @Selector()
  static getPostList(state: PostListStateModel){
    return state.postListId;
  }

  @Action(UpdatePostList)
  update({getState, patchState}: StateContext<PostListStateModel>, {payload}:UpdatePostList){
    const state = getState();
    patchState({
      postListId: [...payload]
    })
  }
}