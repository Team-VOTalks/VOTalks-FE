import type { Comment } from '../types';
import * as Shared from '@/shared';

export default async function getComments(id: string) {
  const { data }: { data: { content: Comment[] } } = await Shared.api.client.get(
    `/votes/${id}/comments`,
  );
  return data;
}
