import type { Pagination } from '@/shared/types';

type LikeType = 'like' | 'dislike' | 'none';

interface UserComment {
  userIndex: number;
  content: string;
  likeCount: number;
  dislikeCount: number;
  createAt: Date | string;
  likeType: LikeType;
}
export interface Comment extends UserComment {
  commentId: number;
  totalReplyCount: number;
}

export interface Comments extends Pagination {
  content: Comment[];
}

export type CommentFormValues = {
  voteId: number;
  content: string;
};

export interface Reply extends UserComment {
  replyId: number;
}

export interface Replies extends Pagination {
  content: Reply[];
}
