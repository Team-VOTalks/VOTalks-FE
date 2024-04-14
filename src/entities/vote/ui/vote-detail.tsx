import * as Entities from '@/entities';

export default async function VoteDetail({ id }: { id: string }) {
  const data = await Entities.getVote(id);

  return <Entities.VoteContent type="detail" data={data} />;
}
