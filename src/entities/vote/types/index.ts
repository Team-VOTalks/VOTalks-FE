import type { Pagination } from '@/shared/types';

export interface VoteOption {
  id: number;
  title: string;
  count: number;
  isChecked: boolean;
}
export interface Vote {
  voteId: number;
  title: string;
  category: string;
  createAt: Date | string;
  totalVoteCount: number;
  description: string | null;
  voteOptionWithCount: VoteOption[];
  totalCommentCount: number;
}

export interface Votes extends Pagination {
  content: Vote[];
}
