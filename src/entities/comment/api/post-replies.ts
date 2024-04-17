import * as Shared from '@/shared';

export default async function postReplies(voteId: string, commentId: string) {
  return await Shared.api.client.post(`/votes/${voteId}/comments/${commentId}`);
}
