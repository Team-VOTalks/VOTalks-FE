import type { Comments } from '../types';
import * as Shared from '@/shared';

export default async function getComments({
  voteId,
  pageParam,
}: {
  voteId: string;
  pageParam?: number;
}) {
  const { data }: { data: Comments } = await Shared.api.client.get(`/votes/${voteId}/comments`, {
    params: { page: pageParam ?? 1 },
  });
  return data;
}
