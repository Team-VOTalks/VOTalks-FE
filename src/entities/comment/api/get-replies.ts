import type { Replies } from '../types';
import * as Shared from '@/shared';

export default async function getReplies({
  voteId,
  commentId,
  pageParam: page = 1,
}: {
  voteId: string;
  commentId: number;
  pageParam?: number;
}) {
  const { data } = await Shared.api.client.get<Replies>(
    `/votes/${voteId}/comments/${commentId}/replies`,
    { params: { page } },
  );
  return data;
}
