import * as Shared from '@/shared';

export default async function postVote({
  voteId,
  voteOptionId,
}: {
  voteId: string;
  voteOptionId: string;
}) {
  return await Shared.api.client.post(`/votes/${voteId}`, { voteOptionId });
}
