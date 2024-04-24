import type { Comments } from '../types';
import * as Shared from '@/shared';

export default async function getComments({
  voteId,
  pageParam: page = 1,
}: {
  voteId: string;
  pageParam?: number;
}) {
  const { data } = await Shared.api.client.get<Comments>(`/votes/${voteId}/comments`, {
    params: { page },
  });
  return data;
}
