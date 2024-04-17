import * as Shared from '@/shared';

export default async function postComments(id: string, content: string) {
  return await Shared.api.client.post(`/votes/${id}/comments`, { content });
}
