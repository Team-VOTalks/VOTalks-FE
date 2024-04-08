import VoteOption from './vote-option';

export default interface Vote {
  voteId: number;
  title: string;
  category: string;
  createAt: Date;
  totalVoteCount: number;
  description: string;
  voteOptionWithCount: VoteOption[];
  totalCommentCount: number;
}
