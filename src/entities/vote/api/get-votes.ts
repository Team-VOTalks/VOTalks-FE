import type { Vote } from '../types';
import * as Shared from '@/shared';

export default async function getVotes(category?: string) {
  const { data }: { data: { content: Vote[] } } = await Shared.api.client.get('/votes', {
    params: { category },
  });
  return data;
}
