import type { Replies } from '../types';
import * as Shared from '@/shared';

export default async function getReplies(voteId: string, commentId: string) {
  const { data } = await Shared.api.client.get<Replies>(`/votes/${voteId}/comments/${commentId}`);
  return data;
}
