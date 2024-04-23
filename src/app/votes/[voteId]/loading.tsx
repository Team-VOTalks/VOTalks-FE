import * as Entities from '@/entities';

export default function VoteDetailLoading() {
  return (
    <div className="py-6">
      <Entities.VoteSkeleton />
    </div>
  );
}
