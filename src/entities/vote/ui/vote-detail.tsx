import getVote from '../api/get-vote';
import VoteContent from './vote-content';

export default async function VoteDetail({ id }: { id: string }) {
  const data = await getVote(id);
  return <VoteContent data={data} type="detail" />;
}
