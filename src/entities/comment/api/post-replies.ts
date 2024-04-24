import * as Shared from '@/shared';

export default async function postReplies({
  voteId,
  commentId,
  content,
}: {
  voteId: string;
  commentId: string;
  content: string;
}) {
  return await Shared.api.client.post(`/votes/${voteId}/comments/${commentId}/replies`, {
    content,
  });
}
