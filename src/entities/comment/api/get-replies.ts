import { Replies } from '../types';
import * as Shared from '@/shared';

export default async function getReplies(voteId: string, commentId: string) {
  const { data }: { data: Replies } = await Shared.api.client.get(
    `/votes/${voteId}/comments/${commentId}`,
  );
  return data;
}
