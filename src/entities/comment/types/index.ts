import type { Pagination } from '@/shared/types';

export interface Comment {
  user: string;
  title: string;
  likeCount: number;
  dislikeCount: number;
  createAt: Date | string;
  totalReplyCount: number;
}

export interface Comments extends Pagination {
  content: Comment[];
}

export type CommentFormValues = {
  voteId: number;
  content: string;
};
