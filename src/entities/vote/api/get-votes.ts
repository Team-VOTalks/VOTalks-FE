import type { Vote } from '../types';
import * as Shared from '@/shared';

export default async function getVotes() {
  const { data }: { data: { content: Vote[] } } = await Shared.api.client.get('/votes');
  return data;
}
