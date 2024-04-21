import * as Shared from '@/shared';

type PostVoteData = {
  voteId: string;
  voteOptionId: string;
};

export default async function postVote({ voteId, voteOptionId }: PostVoteData) {
  return await Shared.api.client.post(`/votes/${voteId}`, { voteOptionId });
}
