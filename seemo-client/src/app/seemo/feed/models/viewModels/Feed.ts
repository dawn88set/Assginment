export interface Feed {
  _id: string;
  position: number;
  content: string;
  timestamp: number;
  likeCount: number;
  liked?: boolean
}
