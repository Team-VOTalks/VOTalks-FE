import type { CreateVoteFormRequestValues } from '../types';
import * as Shared from '@/shared';

export default async function postVotes(body: CreateVoteFormRequestValues) {
  const res = await Shared.api.client.post('/votes', body);
  return res;
}
