import type { Votes } from '../types';
import * as Shared from '@/shared';

export default async function getVotes({
  category,
  pageParam,
}: {
  category?: string;
  pageParam?: number;
}) {
  const { data } = await Shared.api.client.get<Votes>('/votes', {
    params: { category, page: pageParam ?? 1 },
  });
  return data;
}
