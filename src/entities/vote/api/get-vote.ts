import type { Vote } from '../types';
import * as Shared from '@/shared';

export default async function getVote({ voteId }: { voteId: string }) {
  const { data } = await Shared.api.server.get<Vote>(`/votes/${voteId}`);
  return data;
}
