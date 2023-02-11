export interface Post{
  id: number,
  deleted?: boolean,
  type?: string,
  by?: string,
  time?: any,
  text?: string,
  dead?: boolean,
  parent?: number,
  poll?: number,
  kids?: number[],
  url?: string,
  score?: number,
  title?: string,
  parts?: number[],
  descendants?: number,
}