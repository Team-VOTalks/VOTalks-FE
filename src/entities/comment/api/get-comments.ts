import type { Comments } from '../types';
import * as Shared from '@/shared';

export default async function getComments({
  voteId,
  pageParam,
}: {
  voteId: string;
  pageParam?: number;
}) {
  const { data } = await Shared.api.client.get<Comments>(`/votes/${voteId}/comments`, {
    params: { page: pageParam ?? 1 },
  });
  return data;
}
