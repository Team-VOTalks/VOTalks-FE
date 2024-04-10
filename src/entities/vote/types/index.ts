import { type Pagination } from '@/shared/types';

export interface VoteOption {
  id: number;
  title: string;
  count: number;
}
export interface Vote {
  voteId: number;
  title: string;
  category: string;
  createAt: Date;
  totalVoteCount: number;
  description: string;
  voteOptionWithCount: VoteOption[];
  totalCommentCount: number;
}

export interface Votes extends Pagination {
  content: Vote[];
}
