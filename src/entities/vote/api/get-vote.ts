import type { Vote } from '../types';
import * as Shared from '@/shared';

export default async function getVote(id: string): Promise<Vote> {
  const { data }: { data: Vote } = await Shared.api.server.get(`/votes/${id}`);
  return data;
}
