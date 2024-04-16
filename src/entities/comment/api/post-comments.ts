import * as Shared from '@/shared';

export default async function postComments(id: string, content: string) {
  const response = await Shared.api.client.post(`/votes/${id}/comments`, { content });
  return response;
}
