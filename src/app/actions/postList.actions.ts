export class UpdatePostList   {
  static readonly type = '[POST LIST] UPDATE';
  constructor(public payload: number[]) {}
}
