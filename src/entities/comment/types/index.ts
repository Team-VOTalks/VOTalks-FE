export interface Comment {
  user: string;
  title: string;
  likeCount: number;
  dislikeCount: number;
  createAt: Date | string;
  totalReplyCount: number;
}
