import * as Shared from '@/shared';

export default async function postComments({
  voteId,
  content,
}: {
  voteId: string;
  content: string;
}) {
  return await Shared.api.client.post(`/votes/${voteId}/comments`, { content });
}
